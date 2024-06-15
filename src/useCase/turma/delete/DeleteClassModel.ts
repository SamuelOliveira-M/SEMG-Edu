import { prisma } from "../../../lib/prisma"



class DeleteClassModel{
	async deleteClassModel(classId:string){
		const classAlreadExist =  await prisma.turma.findUnique({
			where:{
				id:classId
			}
		})
		console.log(classAlreadExist)
		if(!classAlreadExist){
			return (
				{"error": true,
					"message":"Turma não existe"
				}
			)
		}

		const deleteClass = await prisma.turma.delete({
			where:{
				id:classId
			}
		})

		return {
			"error": true,
			"data":deleteClass
		}	
	}
}

export default new DeleteClassModel()