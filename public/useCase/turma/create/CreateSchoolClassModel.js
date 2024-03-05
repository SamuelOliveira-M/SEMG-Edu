"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ReadSchoolClassModel_1 = __importDefault(require("../read/ReadSchoolClassModel"));
class CreateSchoolClassModel {
    async schoolClassModel(dataSchooClass, tx) {
        const { nome, serie, turno, escolaId, ano_letivoId, status } = dataSchooClass;
        const schoolClassAlreadyExist = await ReadSchoolClassModel_1.default.readSchoolClass(nome, escolaId, ano_letivoId);
        if (schoolClassAlreadyExist) {
            return {
                "message": "Turma já cadastrada",
                "data": schoolClassAlreadyExist
            };
        }
        const schoolclass = await tx.turma.create({
            data: {
                nome,
                serie,
                turno,
                status,
                escolaId,
                ano_letivoId
            }
        });
        return {
            "message": "Turma cadastrada com socesso",
            "data": schoolclass
        };
    }
}
exports.default = new CreateSchoolClassModel();
