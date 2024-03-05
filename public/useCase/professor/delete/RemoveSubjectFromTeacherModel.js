"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../../../lib/prisma");
class RemoveSubjectFromTeacherModel {
    async RemoveSubjectFromTeacherModel(professorEmail, subjectNome) {
        const subject = await prisma_1.prisma.disciplina.findUnique({
            where: {
                nome: subjectNome
            }
        });
        if (!subject) {
            console.log('Disciplina não existe');
            return;
        }
        const teacher = await prisma_1.prisma.professor.findUnique({
            where: {
                email: professorEmail
            },
        });
        if (!teacher) {
            console.error('Professor not found');
            return;
        }
        const teachersSubjects = await prisma_1.prisma.professor.update({
            where: { id: teacher.id },
            data: {
                disciplinasTurmas: {
                    disconnect: { id: subject.id },
                },
            },
        });
        return teachersSubjects;
    }
}
exports.default = new RemoveSubjectFromTeacherModel();
