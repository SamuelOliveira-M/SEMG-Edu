import IHorario from "../../../interface/ITimeRange"
import { prisma } from "../../../lib/prisma"


class CreateTimeRangeModel{
	async CreateTimeRangeModel(dataClassSchedule:IHorario,tx:any){
		const {	
			horarioInicio,
			horarioFim,
		} = dataClassSchedule

		const dataTimeRangeAlreadExist  = await prisma.horario.findUnique({
			where:{
				horarioInicio,
			}
		})
		if(dataTimeRangeAlreadExist){
			return dataTimeRangeAlreadExist
		}


		const TimeRange = await tx.horario.create({
			data:{
				horarioInicio,
				horarioFim,
			}
		})
		return TimeRange
	}
}

export default new CreateTimeRangeModel()