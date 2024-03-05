"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ReadSubjectModel_1 = __importDefault(require("./ReadSubjectModel"));
const organizingDataStructures_1 = require("../../../services/organizingDataStructures");
class ReadSubjectOfGradeController {
    async gradesBySubject(req, res) {
        const matriculaId = req.params.registrationId;
        try {
            const grade = await ReadSubjectModel_1.default.gradesBySubjectModel(matriculaId);
            const subjectOfGrade = (0, organizingDataStructures_1.criarEstruturaDados)(grade);
            return res.json(subjectOfGrade);
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
exports.default = new ReadSubjectOfGradeController();
