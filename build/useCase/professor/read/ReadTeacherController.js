"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ReadTeacherModel_1 = __importDefault(require("./ReadTeacherModel"));
class ReadTeacherController {
    async readAllTeachersController(request, response) {
        try {
            const teacher = await ReadTeacherModel_1.default.readAllTeachersModel();
            return response.json(teacher);
        }
        catch (e) {
            response.json(e);
        }
    }
    async readTeachersClasses(request, response) {
        try {
            const { email } = request.body;
            const teacher = await ReadTeacherModel_1.default.readTeachersClasses(email);
            return response.json(teacher);
        }
        catch (e) {
            response.json(e);
        }
    }
}
exports.default = new ReadTeacherController();
