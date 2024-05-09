import { prisma } from "../../../../lib/prisma"


class ReadAllocationOfTeacherController{
	
	async AllocationOfTeacherModel(schoolClassId:string){
		const AllocationOfTeacher = await prisma.lotacao.findMany({
			where: {
				turmaId: schoolClassId
			},
			distinct:['professorId'],
			select:{
				professor:{
					select:{
						id:true,
						nome:true,
						email:true,
						url_image:true,
						disciplinasTurmas:{
							select:{
								disciplina:{
									select:{
										id:true,
										nome:true
									}
								}
							}
						}
					}
				}
			}
		})
					
		return AllocationOfTeacher
	}

	async lotacaoAlreadExist(
		className:string,
		teacherName:string,
		subjectName:string
	){

		const classAlereadExist = await prisma.turma.findUnique({
			where:{
				nome:className
			}
		})
		if(!classAlereadExist){
			return "Turma não existe"
		}

		const teacherAlereadExist = await prisma.professor.findUnique({
			where:{
				nome:teacherName
			}
		})
		if(!teacherAlereadExist){
			return "Turma Professor não existe"
		}

		const subjectAlereadExist = await prisma.disciplina.findUnique({
			where:{
				nome:subjectName
			}
		})
		if(!subjectAlereadExist){
			return "Turma Professor não existe"
		}



		const lotacao = await prisma.lotacao.findFirst({
			where:{
				disciplinaId:subjectAlereadExist.id,
				professorId:teacherAlereadExist.id,
				turmaId:classAlereadExist.id
			}
		})

		if(!lotacao){
			return 'lotação não existe'
		}

		return lotacao

	}

}

export default new ReadAllocationOfTeacherController
