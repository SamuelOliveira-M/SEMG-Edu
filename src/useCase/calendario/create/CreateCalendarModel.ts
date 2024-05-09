import ICalendar from "../../../interface/ICalendar"
import { prisma } from "../../../lib/prisma"
import { DiaSemana } from "../../../lib/enums";
import { obterNumeroDiaSemana } from "../../../services/obterNumeroDiaSemana";

class CreateCalendarModel{
	async createCalendarModel(dataCalendar:ICalendar){
		const {	
			diaSemana, 
			horarioId,
		} = dataCalendar

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
			}
		})

		if(CalendarAlreadExist){
			return "Horario Já preenchido"
		}
 
		const diaNum = obterNumeroDiaSemana(diaSemana)

		if(diaNum){
			const calendar = await prisma.calendario.create({
				data:{
					diaSemana,
					ordemSemana:diaNum,
					horarioId,
				}
			})
			return calendar
		}

		return 'Dia na semana não existe'
	}
}

export default new CreateCalendarModel()