import { prisma } from "../../../lib/prisma"


class ReadTeacherModel{
	async readTeacherModel(email:string){
		
		const teacherAlreadyExists= await prisma.professor.findUnique({
			where: {
				email: email,
			},
		});

		if(!teacherAlreadyExists){
			console.log('Disciplina não existe')
			return;
		}

		const associacoes = await prisma.professor_Disciplina_Turma.findMany({
			where: {
				professorId: teacherAlreadyExists.id,
			},
			include: {
				turma:{
					select:{
						id:true,
						nome:true,
						serie:true,
						turno:true,
						status: true,						
					},
				}
			},
		});

		return associacoes
	}

	async readAllTeachersModel(){
		
		const teacherAlreadyExists= await prisma.professor.findMany();

		return teacherAlreadyExists
	}

	async readTeachersClasses( email: string ) {
		
		const teachersClasses = await prisma.professor.findUnique({
			where:{
				email
			},
			include:{
				disciplinasTurmas:{
					include:{
						turma:true
					}
				}
			}
		})
	return teachersClasses
	}
}

export default new ReadTeacherModel()