"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = __importDefault(require("../../../services/Validator"));
class CreateAlunoController {
    async createAlunoController(dataStudent) {
        try {
            const ValidatorStudent = Validator_1.default.studentValidator(dataStudent);
            console.log(ValidatorStudent);
            if (ValidatorStudent) {
                return ({
                    "error": true,
                    "message": "O Campo " + ValidatorStudent + " é invalido"
                });
            }
            return ({
                "error": false,
                "message": "Campos validos"
            });
        }
        catch (e) {
            console.log(e);
        }
    }
}
exports.default = new CreateAlunoController();
