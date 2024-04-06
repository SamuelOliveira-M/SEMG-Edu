import { prisma } from "../../../../lib/prisma"


class ReadAllocationOfTeacherController{
	
	async AllocationOfTeacherModel(schoolClassId:string){
		const AllocationOfTeacher = await prisma.turma.findUnique({
			where:{
				id:schoolClassId
			},
			include:{
				disciplinasTurmas:{
					select:{
						disciplina:true,
						professor:true
					}
				}
			}
		})
					
		return AllocationOfTeacher
	}
}

export default new ReadAllocationOfTeacherController
