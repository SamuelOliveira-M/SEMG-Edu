"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../../../lib/prisma");
class AddSubjectToTeacherModel {
    async addSubjectToTeacher(professorEmail, subjectNome, className) {
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
        // Check if the professor exists
        if (!teacher) {
            console.error('Professor not found');
            return;
        }
        const schoolClass = await prisma_1.prisma.turma.findUnique({
            where: {
                nome: className
            },
        });
        if (!schoolClass) {
            console.error('Professor not found');
            return;
        }
        const disciplinasDoProfessorNaTurma = await prisma_1.prisma.professor_Disciplina_Turma.create({
            data: {
                professorId: teacher.id,
                disciplinaId: subject.id,
                turmaId: schoolClass.id,
            },
        });
        return disciplinasDoProfessorNaTurma;
    }
}
exports.default = new AddSubjectToTeacherModel();
