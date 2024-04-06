import { prisma } from "../../../lib/prisma"

class ReadSchoolClassModel{
	async readSchoolClass(nome:string,escolaId:string,ano_letivoId:string){
		const schoolClassAlreadyExist = await prisma.turma.findFirst({
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

		return schoolClassAlreadyExist
	}

	async readSchoolClassAll(){
		const schoolClassAlreadyExist = await prisma.turma.findMany({
			include:{
				ano_letivo:true
			}

		})
					
		return schoolClassAlreadyExist
	}
	
	async schoolClassFindFirst(schoolId:string){
		const schoolClassAlreadyExist = await prisma.turma.findUnique({
			where:{
				id:schoolId
			},
			include:{
				matriculas:true
			}
		})
					
		return schoolClassAlreadyExist
	}

	async readTeacherClasses(teacherId:string){
		
		const teacherClasses = await prisma.professor.findUnique({
			where:{
				id:teacherId
			},
			include:{
				disciplinasTurmas:{
					select:{
						turma:{
							include:{
								ano_letivo:true
							}
						}
					}
				}
			}
		})
					
		return teacherClasses
	}

	
}

export default new ReadSchoolClassModel()