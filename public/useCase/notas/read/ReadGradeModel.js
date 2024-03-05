"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../../../lib/prisma");
class ReadGradeModel {
    async readGrade(dataGrade, disciplinaId, matriculaId) {
        const { nota, mes } = dataGrade;
        const gradeAlreadyExists = await prisma_1.prisma.avaliacao.findFirst({
            where: {
                nota: {
                    equals: nota,
                },
                mes: {
                    equals: mes,
                },
                disciplinaId: {
                    equals: disciplinaId,
                },
                matriculaId: {
                    equals: matriculaId,
                }
            },
        });
        return gradeAlreadyExists;
    }
    async readGradeAluno(registrationId) {
        const studantGrade = await prisma_1.prisma.avaliacao.findMany({
            where: {
                matriculaId: registrationId
            },
            include: {
                disciplina: true
            }
        });
        return studantGrade;
    }
}
exports.default = new ReadGradeModel();
