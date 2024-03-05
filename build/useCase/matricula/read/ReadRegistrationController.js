"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ReadRegistrationModel_1 = __importDefault(require("./ReadRegistrationModel"));
class ReadRegistrationController {
    async readMatriculaController(req, res) {
        const id = req.params.classId;
        try {
            const registration = await ReadRegistrationModel_1.default.readclassRegistration(id);
            console.log(registration);
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
    async readRegistrationUniqueController(req, res) {
        const id = req.params.classId;
        try {
            const registration = await ReadRegistrationModel_1.default.readRegistration(id);
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
    async readRegistrationNotesController(req, res) {
        const id = req.params.classId;
        try {
            const registration = await ReadRegistrationModel_1.default.readclassRegistrationNotes(id);
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
exports.default = new ReadRegistrationController();
