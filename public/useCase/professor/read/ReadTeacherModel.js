"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../../../lib/prisma");
class ReadTeacherModel {
    async readTeacherModel(email) {
        const teacherAlreadyExists = await prisma_1.prisma.professor.findUnique({
            where: {
                email: email,
            },
        });
        if (!teacherAlreadyExists) {
            console.log('Disciplina não existe');
            return;
        }
        const associacoes = await prisma_1.prisma.professor_Disciplina_Turma.findMany({
            where: {
                professorId: teacherAlreadyExists.id,
            },
            include: {
                turma: {
                    select: {
                        id: true,
                        nome: true,
                        serie: true,
                        turno: true,
                        status: true,
                    },
                }
            },
        });
        return associacoes;
    }
    async readAllTeachersModel() {
        const teacherAlreadyExists = await prisma_1.prisma.professor.findMany();
        return teacherAlreadyExists;
    }
    async readTeachersClasses(email) {
        const teachersClasses = await prisma_1.prisma.professor.findUnique({
            where: {
                email
            },
            include: {
                disciplinasTurmas: {
                    include: {
                        turma: true
                    }
                }
            }
        });
        return teachersClasses;
    }
}
exports.default = new ReadTeacherModel();
