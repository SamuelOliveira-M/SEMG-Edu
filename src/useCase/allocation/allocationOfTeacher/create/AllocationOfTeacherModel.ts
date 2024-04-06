import { prisma } from "../../../../lib/prisma"

class AllocationOfTeacherModel{
	async addSubjectToTeacher(
		professorEmail: string,
		subjectNome: string,
		className:string
		){
		
		
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


		const schoolClass = await prisma.turma.findUnique({
			where: {
				nome:className
			},
		});
		if (!schoolClass) {
			console.error('Professor not found');
			return;
		}

		const disciplinasDoProfessorNaTurma = await prisma.professor_Disciplina_Turma.create({
			data: {
				professorId: teacher.id,
				disciplinaId: subject.id,
				turmaId: schoolClass.id,
			},
		});
		
		return disciplinasDoProfessorNaTurma
	}
}

export default new AllocationOfTeacherModel()