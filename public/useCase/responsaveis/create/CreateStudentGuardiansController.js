"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = __importDefault(require("../../../services/Validator"));
class CreateStudentGuardiansController {
    async CreateStudentGuardians(dataResponsibile) {
        const { nome_pai, nome_mae, telefone, telefone_secundario } = dataResponsibile;
        const validatorStudentGuardions = Validator_1.default.studentGuardionsValidator({
            nome_pai,
            nome_mae,
            telefone,
            telefone_secundario
        });
        if (validatorStudentGuardions) {
            return ({
                "error": true,
                "message": "O campo " + validatorStudentGuardions + " é invalido"
            });
        }
        return ({
            "error": false,
            "message": "Campos validos"
        });
    }
}
exports.default = new CreateStudentGuardiansController();
