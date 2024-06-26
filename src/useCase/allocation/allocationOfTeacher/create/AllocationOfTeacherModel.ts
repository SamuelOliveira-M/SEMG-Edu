import { prisma } from "../../../../lib/prisma"

class AllocationOfTeacherModel{
	async addSubjectToTeacher(
		teacherId: string,
		subjectId: string,
		classId:string
		){
		
		const subject = await prisma.disciplina.findUnique({
			where:{
				id:subjectId
			}
		})

		if(!subject){
			console.log('Disciplina não existe')
			return {
				'error': true,
				'message':'Disciplina não existe'
			}
		}
		
		
		const teacher = await prisma.professor.findUnique({
			where: {
					id: teacherId 
			},
		});

		
		if (!teacher) {
			console.error('Professor not found');
			return {
				'error': true,
				'message':'Professor não Existe'
			}
		}


		const schoolClass = await prisma.turma.findUnique({
			where: {
				id:classId
			},
		});
		if (!schoolClass) {
			return {
				'error': true,
				'message':'Turma não existe'
			}
		}

		const AllocationOfTeacherAlreadExist = await prisma.lotacao.findFirst({
			where:{
				professorId:teacherId,
				disciplinaId:subjectId,
				turmaId:classId
			}
		})
		if (AllocationOfTeacherAlreadExist) {
			return {
				'error': true,
				'message':'O professor já está lotado com essa disciplina'
			}
		}
		const disciplinasDoProfessorNaTurma = await prisma.lotacao.create({
			data: {
				professorId: teacher.id,
				disciplinaId: subject.id,
				turmaId: schoolClass.id,
			},
		});
		
		return {
			'error': false,
			'data':disciplinasDoProfessorNaTurma
		}
	}
}

export default new AllocationOfTeacherModel()