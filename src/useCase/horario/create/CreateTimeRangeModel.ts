import IHorario from "../../../interface/ITimeRange"
import { prisma } from "../../../lib/prisma"


class CreateTimeRangeModel{
	async CreateTimeRangeModel(dataClassSchedule:IHorario){
		const {	
			horarioInicio,
			horarioFim,
			lotacaoId
			 
		} = dataClassSchedule

		const AllocationAlreadExist  = await prisma.professor_Disciplina_Turma.findUnique({
			where:{
				id:lotacaoId
			}
		})
		if(!AllocationAlreadExist){
			return 'Não exites essa locação de professor'
		}


		const dataTimeRangeAlreadExist  = await prisma.horario.findUnique({
			where:{
				horarioInicio,
				lotacaoId
			}
		})
		if(dataTimeRangeAlreadExist){
			return "Esse horário já foi cadastrado."
		}


		const TimeRange = await prisma.horario.create({
			data:{
				horarioInicio,
				horarioFim,
				lotacaoId
			}
		})
		return TimeRange
	}
}

export default new CreateTimeRangeModel()