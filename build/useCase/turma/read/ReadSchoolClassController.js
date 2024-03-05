"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ReadSchoolClassModel_1 = __importDefault(require("./ReadSchoolClassModel"));
class ReadSchoolClassController {
    async readSchoolClass(req, res) {
        try {
            const schoolClass = await ReadSchoolClassModel_1.default.readSchoolClassAll();
            res.json(schoolClass);
        }
        catch (e) {
            console.log(e);
        }
    }
    async readSchoolClassFindFirst(req, res) {
        const id = req.params.id;
        try {
            const schoolClass = await ReadSchoolClassModel_1.default.schoolClassFindFirst(id);
            res.json(schoolClass);
        }
        catch (e) {
            console.log(e);
        }
    }
    async readSubjectAndTeacherOfClass(req, res) {
        const id = req.params.id;
        try {
            const schoolClass = await ReadSchoolClassModel_1.default.readSubjectAndTeacherOfClassModel(id);
            res.json(schoolClass);
        }
        catch (e) {
            console.log(e);
        }
    }
}
exports.default = new ReadSchoolClassController();
