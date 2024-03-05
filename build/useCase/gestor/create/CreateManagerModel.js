"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../../../lib/prisma");
const bcryptjs_1 = require("bcryptjs");
const ReadManagerModel_1 = __importDefault(require("../read/ReadManagerModel"));
class CreateManagerModel {
    async createManagerModel(dataManager) {
        const { nome, email, senha } = dataManager;
        const managerAlreadyExists = await ReadManagerModel_1.default.readManager(email);
        if (managerAlreadyExists) {
            return {
                "message": "Gestor já existe no sistema",
                "data": managerAlreadyExists
            };
        }
        const passwordHash = await (0, bcryptjs_1.hash)(senha, 8);
        const manager = await prisma_1.prisma.gestor.create({
            data: {
                nome,
                email,
                senha: passwordHash
            }
        });
        return {
            "message": "Gestor criado com sucesso",
            "data": manager
        };
    }
}
exports.default = new CreateManagerModel();
