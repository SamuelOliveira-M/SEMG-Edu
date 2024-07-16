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
		allocationId:string
	){

		const lotacao = await prisma.lotacao.findUnique({
			where:{
				id:allocationId
			}
		})

		if(!lotacao){
			return 'lotação não existe'
		}

		return lotacao

	}

}

export default new ReadAllocationOfTeacherController
