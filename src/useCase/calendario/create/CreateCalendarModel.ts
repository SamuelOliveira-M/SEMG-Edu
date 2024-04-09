import ICalendar from "../../../interface/ICalendar"
import { prisma } from "../../../lib/prisma"

class CreateCalendarModel{
	async createCalendarModel(dataCalendar:ICalendar){
		const {	
			diaSemana, 
			lotacaoId,
			horarioId
		} = dataCalendar

		const AllocationAlreadExist  = await prisma.professor_Disciplina_Turma.findUnique({
			where:{
				id:lotacaoId
			}
		})

		if(!AllocationAlreadExist){
			return 'Não exites essa locação de professor'
		}


		const timeRangeAlreadExist  = await prisma.horario.findUnique({
			where:{
				id:horarioId
			}
		})

		if(!timeRangeAlreadExist){
			return 'Esse Horário Não está cadastrado no sistema'
		}


		const CalendarAlreadExist  = await prisma.calendario.findFirst({
			where:{
				diaSemana,
				horarioId,
				lotacaoId
			}
		})

		if(CalendarAlreadExist){
			return "Horario Já preenchido"
		}


		const calendar = await prisma.calendario.create({
			data:{
				diaSemana,
				horarioId,
				lotacaoId 
			}
		})
		return calendar
	}
}

export default new CreateCalendarModel()