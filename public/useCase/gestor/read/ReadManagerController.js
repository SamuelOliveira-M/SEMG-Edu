"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ReadManagerModel_1 = __importDefault(require("./ReadManagerModel"));
class ReadManagerController {
    async readManagerController(req, res) {
        const { email, senha } = req.body;
        const managerAlreadyExists = await ReadManagerModel_1.default.readManager(email);
        return res.json(managerAlreadyExists);
    }
}
exports.default = new ReadManagerController();
