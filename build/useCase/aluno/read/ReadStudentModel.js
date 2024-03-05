"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../../../lib/prisma");
class ReadStudentModel {
    async readStudent(cpf) {
        const alunoAlreadyExist = await prisma_1.prisma.aluno.findFirst({
            where: {
                cpf
            },
            include: {
                matricula: true,
            },
        });
        return alunoAlreadyExist;
    }
}
exports.default = new ReadStudentModel();
