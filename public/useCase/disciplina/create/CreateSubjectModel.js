"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../../../lib/prisma");
const ReadSubjectModel_1 = __importDefault(require("../read/ReadSubjectModel"));
class CreateSubjectsModel {
    async createSubjectsModel(dataSubject) {
        const { nome, carga_horaria } = dataSubject;
        const subjectAlreadyExists = await ReadSubjectModel_1.default.readSubject(nome);
        if (subjectAlreadyExists) {
            return {
                "message": "Disciplina já existe no sistema",
                "data": subjectAlreadyExists
            };
        }
        const subject = await prisma_1.prisma.disciplina.create({
            data: {
                nome,
                carga_horaria
            }
        });
        return {
            "message": "Disciplina criado com sucesso",
            "data": subject
        };
    }
}
exports.default = new CreateSubjectsModel();
