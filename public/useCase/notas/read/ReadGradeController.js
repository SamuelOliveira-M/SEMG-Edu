"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ReadGradeModel_1 = __importDefault(require("./ReadGradeModel"));
class ReadGradeController {
    async readRegistrationNotesController(req, res) {
        const id = req.params.registrationId;
        try {
            const registration = await ReadGradeModel_1.default.readGradeAluno(id);
            return res.json(registration);
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
exports.default = new ReadGradeController();
