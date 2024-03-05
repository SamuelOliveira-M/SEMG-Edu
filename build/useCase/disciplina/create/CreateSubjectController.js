"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = __importDefault(require("../../../services/Validator"));
const CreateSubjectModel_1 = __importDefault(require("./CreateSubjectModel"));
class CreateSubjectsController {
    async createSubjectsController(req, res) {
        let dataSubject = req.body;
        try {
            const validatorSubject = Validator_1.default.subjectValidator(dataSubject);
            if (validatorSubject) {
                return res.json({
                    "error": true,
                    "message": "O Campo " + validatorSubject + " é invalido"
                });
            }
            const subject = await CreateSubjectModel_1.default.createSubjectsModel(dataSubject);
            return res.json(subject);
        }
        catch (e) {
            return res.json({
                "error": true,
                "message": "Erro desconhecido"
            });
        }
    }
}
exports.default = new CreateSubjectsController();
