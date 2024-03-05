"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = __importDefault(require("../../../services/Validator"));
const CreateTeacherModel_1 = __importDefault(require("./CreateTeacherModel"));
class CreateTeacherController {
    async createTeacherController(req, res) {
        const dataTeacherJson = req.body.data;
        let dataTeacher = JSON.parse(dataTeacherJson);
        dataTeacher.url_image = req.headers.filebaseUrl;
        try {
            const validatorTeacher = Validator_1.default.teacherValidator(dataTeacher);
            if (validatorTeacher) {
                return res.json({
                    "error": true,
                    "message": "O Campo " + validatorTeacher + " é invalido"
                });
            }
            const teacher = await CreateTeacherModel_1.default.createTeacherModel(dataTeacher);
            return res.json(teacher);
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
exports.default = new CreateTeacherController();
