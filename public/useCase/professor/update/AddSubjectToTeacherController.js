"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AddSubjectToTeacherModel_1 = __importDefault(require("./AddSubjectToTeacherModel"));
class AddSubjectToTeacherController {
    async AddSubjectToTeacher(req, res) {
        try {
            const { professorEmail, subjectNome, className } = req.body;
            const teachersSubjects = await AddSubjectToTeacherModel_1.default.addSubjectToTeacher(professorEmail, subjectNome, className);
            res.json(teachersSubjects);
        }
        catch (e) {
            console.log(e);
        }
    }
}
exports.default = new AddSubjectToTeacherController();
