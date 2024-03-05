"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../../../lib/prisma");
class ReadSubjectModel {
    async readSubject(nome) {
        const subjectAlreadyExists = await prisma_1.prisma.disciplina.findFirst({
            where: {
                nome: nome,
            }
        });
        return subjectAlreadyExists;
    }
    async gradesBySubjectModel(matriculaId) {
        const disciplinasComNotas = await prisma_1.prisma.disciplina.findMany({
            include: {
                avaliacao: {
                    where: {
                        matriculaId,
                    },
                    select: {
                        id: true,
                        tipo: true,
                        nota: true,
                        mes: true,
                        semestre: true,
                    },
                },
            },
        });
        return disciplinasComNotas;
    }
}
exports.default = new ReadSubjectModel();
