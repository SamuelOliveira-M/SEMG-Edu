import { prisma } from "../../../../lib/prisma"


class ReadAllocationOfTeacherController{
	
	async AllocationOfTeacherModel(schoolClassId:string){
		const AllocationOfTeacher = await prisma.professor_Disciplina_Turma.findMany({
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

			
			
			// where:{
			// 	id:schoolClassId
			// },
			// select:{
			// 	disciplinasTurmas:{
			// 		select:{
			// 			professor:{
			// 				select:{
			// 					id: true,
			// 					nome: true,
      // 					email:true,
      // 					url_image:true,

			// 					disciplinasTurmas:{
			// 						select:{
			// 							disciplina:{
			// 								select:{
			// 									id:true,
			// 									nome:true
			// 								}
			// 							}
			// 						}
			// 					}
			// 				}
			// 			}
			// 		}
			// 	}
			// }
		})
					
		return AllocationOfTeacher
	}
}

export default new ReadAllocationOfTeacherController
