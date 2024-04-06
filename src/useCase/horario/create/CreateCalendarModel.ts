import ICalendar from "../../../interface/ICalendar"
import { prisma } from "../../../lib/prisma"

class CreateCalendarModel{
	async createCalendarModel(dataCalendar:ICalendar){
		const {	
			diaSemana,
			horarioInicio,
			horarioFim, 
			lotacaoId 
		} = dataCalendar

		const AllocationAlreadExist  = await prisma.professor_Disciplina_Turma.findUnique({
			where:{
				id:lotacaoId
			}
		})

		if(!AllocationAlreadExist){
			return 'Não exites essa locação de professor'
		}

		const CalendarAlreadExist  = await prisma.calendario.findFirst({
			where:{
				diaSemana,
				horarioInicio,
				horarioFim,
				lotacaoId
			}
		})

		if(CalendarAlreadExist){
			return "Horario Já preenchido"
		}


		const calendar = await prisma.calendario.create({
			data:{
				diaSemana,
				horarioInicio,
				horarioFim,
				lotacaoId 
			}
		})
		return calendar
	}
}

export default new CreateCalendarModel()