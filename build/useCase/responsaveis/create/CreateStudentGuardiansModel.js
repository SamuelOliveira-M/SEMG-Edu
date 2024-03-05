"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ReadStudentGuardiansModel_1 = __importDefault(require("../read/ReadStudentGuardiansModel"));
class CreateStudentGuardiansModel {
    async createStudentGuardians(dataStudentGuardians, tx) {
        const { nome_pai, nome_mae, telefone, telefone_secundario } = dataStudentGuardians;
        const responsaveisAlreadyExists = await ReadStudentGuardiansModel_1.default.readStudentGuardians(nome_pai, nome_mae);
        if (responsaveisAlreadyExists) {
            return {
                "message": "Responsável já existe no sistema",
                "data": responsaveisAlreadyExists
            };
        }
        const studentGuardians = await tx.responsavel.create({
            data: {
                nome_pai,
                nome_mae,
                telefone,
                telefone_secundario
            }
        });
        return {
            "message": "Responsavél criado com sucesso",
            "data": studentGuardians
        };
    }
}
exports.default = new CreateStudentGuardiansModel();
