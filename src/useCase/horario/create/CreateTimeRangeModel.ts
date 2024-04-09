import IHorario from "../../../interface/ITimeRange"
import { prisma } from "../../../lib/prisma"


class CreateTimeRangeModel{
	async CreateTimeRangeModel(dataClassSchedule:IHorario){
		const {	
			horarioInicio,
			horarioFim, 
			 
		} = dataClassSchedule

		
		const dataTimeRangeAlreadExist  = await prisma.horario.findUnique({
			where:{
				horarioInicio
			}
		})

		if(dataTimeRangeAlreadExist){
			return "Esse horário já foi cadastrado."
		}


		const TimeRange = await prisma.horario.create({
			data:{
				horarioInicio,
				horarioFim, 
			}
		})
		return TimeRange
	}
}

export default new CreateTimeRangeModel()