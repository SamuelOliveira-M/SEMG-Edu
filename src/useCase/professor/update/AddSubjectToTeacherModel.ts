import { prisma } from "../../../lib/prisma"

class AddSubjectToTeacherModel{
	async addSubjectToTeacher(professorEmail: string, subjectNome: string) {
		
		
		const subject = await prisma.disciplina.findUnique({
			where:{
				nome:subjectNome
			}
		})

		if(!subject){
			console.log('Disciplina não existe')
			return;
		}
		
		
		const teacher = await prisma.professor.findUnique({
			where: {
					email: professorEmail 
			},
		});

		// Check if the professor exists
		if (!teacher) {
			console.error('Professor not found');
			return;
		}

		// Add the subject to the professor
		const teachersSubjects = await prisma.professor.update({
			where: { id: teacher.id },
			data: {
				disciplinas: {
					connect: { id: subject.id },
				},
			},
		});

		const disciplinasDoProfessorNaTurma = await prisma.professor.findUnique({
      where: { id: teacher.id },
      select: {
        disciplinas: {}
      },
    });

		return disciplinasDoProfessorNaTurma
	}
}

export default new AddSubjectToTeacherModel()