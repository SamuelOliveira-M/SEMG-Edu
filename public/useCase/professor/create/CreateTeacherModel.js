"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../../../lib/prisma");
const bcryptjs_1 = require("bcryptjs");
const ReadTeacherModel_1 = __importDefault(require("../read/ReadTeacherModel"));
class CreateTeacherModel {
    async createTeacherModel(dataTeacher) {
        const { nome, cpf, email, senha, data_nascimento, url_image } = dataTeacher;
        const dataNascimento = new Date(data_nascimento);
        const teacherAlreadyExists = await ReadTeacherModel_1.default.readTeacherModel(email);
        if (teacherAlreadyExists) {
            return {
                "message": "Disciplina já existe no sistema",
                "data": teacherAlreadyExists
            };
        }
        const passwordHash = await (0, bcryptjs_1.hash)(senha, 8);
        const teacher = await prisma_1.prisma.professor.create({
            data: {
                nome,
                cpf,
                email,
                senha: passwordHash,
                data_nascimento: dataNascimento,
                url_image
            }
        });
        return {
            "message": "Disciplina criado com sucesso",
            "data": teacher
        };
    }
}
exports.default = new CreateTeacherModel();
