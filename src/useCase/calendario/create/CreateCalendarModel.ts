import { prisma } from "../../../lib/prisma"
import { getNumberDayWeek } from "../../../services/obterNumeroDiaSemana";

class CreateCalendarModel{
	async createCalendarModel(weekDay:string, tx:any){

		const CalendarAlreadExist  = await prisma.calendario.findUnique({
			where:{
				diaSemana:weekDay,
			}
		})

		if(CalendarAlreadExist){
			return CalendarAlreadExist
		}
 
		const numDay = getNumberDayWeek(weekDay)

		if(numDay){
			const calendar = await tx.calendario.create({
				data:{
					diaSemana:weekDay,
					ordemSemana:numDay,
					
				}
			})
			return calendar
		}

		return 'Dia na semana não existe'
	}
}

export default new CreateCalendarModel()