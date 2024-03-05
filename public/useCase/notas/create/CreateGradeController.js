"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = __importDefault(require("../../../services/Validator"));
const CreateGradeModel_1 = __importDefault(require("./CreateGradeModel"));
class CreateGradeController {
    async CreateGradeController(req, res) {
        let dataGrade = req.body;
        dataGrade.matriculaId = req.params.registrationId;
        dataGrade.anoLetivo = new Date(dataGrade.anoLetivo, 0, 1);
        try {
            const validatorGrade = Validator_1.default.gradeValidator(dataGrade);
            if (validatorGrade) {
                return res.json({
                    "error": true,
                    "message": "O Campo " + validatorGrade + " é invalido"
                });
            }
            const grade = await CreateGradeModel_1.default.createGradeModel(dataGrade);
            if (grade.erro) {
                return res.json({
                    "error": grade.erro,
                    "message": grade.message
                });
            }
            return res.json(grade);
        }
        catch (e) {
            console.log(e);
            return res.json({
                "error": true,
                "message": "Erro desconhecido"
            });
        }
    }
}
exports.default = new CreateGradeController();
