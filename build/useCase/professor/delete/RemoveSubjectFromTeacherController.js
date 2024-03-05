"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RemoveSubjectFromTeacherModel_1 = __importDefault(require("./RemoveSubjectFromTeacherModel"));
class RemoveSubjectFromTeacherController {
    async removeSubjectFromTeacher(req, res) {
        try {
            const { professorEmail, subjectNome } = req.body;
            const teachersSubjects = await RemoveSubjectFromTeacherModel_1.default.RemoveSubjectFromTeacherModel(professorEmail, subjectNome);
            res.json(teachersSubjects);
        }
        catch (e) {
            console.log(e);
        }
    }
}
exports.default = new RemoveSubjectFromTeacherController();
