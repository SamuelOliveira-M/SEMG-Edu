"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../../../lib/prisma");
class ReadSchoolClassModel {
    async readSchoolClass(nome, escolaId, ano_letivoId) {
        const schoolClassAlreadyExist = await prisma_1.prisma.turma.findFirst({
            where: {
                nome: {
                    equals: nome,
                },
                escolaId: {
                    equals: escolaId,
                },
                ano_letivoId: {
                    equals: ano_letivoId,
                },
            },
        });
        return schoolClassAlreadyExist;
    }
    async readSchoolClassAll() {
        const schoolClassAlreadyExist = await prisma_1.prisma.turma.findMany({
            include: {
                ano_letivo: true
            }
        });
        return schoolClassAlreadyExist;
    }
    async schoolClassFindFirst(schoolId) {
        const schoolClassAlreadyExist = await prisma_1.prisma.turma.findUnique({
            where: {
                id: schoolId
            },
            include: {
                matriculas: true
            }
        });
        return schoolClassAlreadyExist;
    }
    async readSubjectAndTeacherOfClassModel(schoolClassId) {
        const schoolClassAlreadyExist = await prisma_1.prisma.turma.findUnique({
            where: {
                id: schoolClassId
            },
            include: {
                disciplinasTurmas: {
                    select: {
                        disciplina: true,
                        professor: true
                    }
                }
            }
        });
        return schoolClassAlreadyExist;
    }
}
exports.default = new ReadSchoolClassModel();
