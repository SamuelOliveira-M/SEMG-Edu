import { prisma } from "../../../lib/prisma";



class RemoveSubjectFromTeacherModel {
	async RemoveSubjectFromTeacherModel(professorEmail: string, subjectNome: string) {
		
		
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

		if (!teacher) {
			console.error('Professor not found');
			return;
		}

		const teachersSubjects = await prisma.professor.update({
			where: { id: teacher.id },
			data: {
				disciplinasTurmas: {
					disconnect: { id: subject.id },
				},
			},
		});

		return teachersSubjects
	}


}

export default new RemoveSubjectFromTeacherModel()