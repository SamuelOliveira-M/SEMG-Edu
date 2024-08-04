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

	async readSchoolClassAll(searchTerm:string|undefined){
		if(searchTerm){
			const schoolClassAlreadyExist = await prisma.turma.findMany({
				where: {
					nome: {
						contains: searchTerm, // Pesquisa de aproximação
						mode: 'insensitive', // Torna a pesquisa case-insensitive
					},
				},
				include:{
					ano_letivo:true
				}
	
			})
						
			return schoolClassAlreadyExist	
		}
		
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

		const teacherClasses = await prisma.lotacao.findMany({
			where:{
				professorId:teacherId
			},
			select: {
				turma: {
					include: {
							ano_letivo: true,
					},
				},
			},

			distinct: ['turmaId'],
		})
				
		return teacherClasses
	}
}

export default new ReadSchoolClassModel()