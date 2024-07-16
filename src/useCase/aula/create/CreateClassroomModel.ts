import { date } from "joi"
import { IClassroom } from "../../../interface/IClassroom"
import { prisma } from "../../../lib/prisma"

class CreateClassroomModel{
	async createClassroomModel(dataClassroom:IClassroom, tx:any){
		const {	
			lotacaoId,     
			calendarioId, 
			horarioId, 
		} = dataClassroom

		const aulaAlreadExist  = await prisma.aula.findFirst({
			where:{
			 horarioId,
			 lotacaoId,
			 calendarioId,
			}
		})
		
		if(aulaAlreadExist){
			return "Essa Aula já existe "
		}


		const newAula = await tx.aula.create({
			data:{
				lotacaoId,
				calendarioId,
				horarioId
			}
		})

		return newAula 			
	}
}

export default new CreateClassroomModel()