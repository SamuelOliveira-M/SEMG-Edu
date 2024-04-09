import ICalendar from "../../../interface/ICalendar"
import { prisma } from "../../../lib/prisma"

class ReadCalendarModel{
	async readCalendarModel(){

		const calendar = await prisma.calendario.findMany({
			select:{
				diaSemana:true,
				horario:{
					select:{
						horarioInicio:true,
						horarioFim:true
					}
				},
				lotacao:{
					select:{
						professor:{
							select:{
								nome:true
							}
						},
						turma:{
							select:{
								nome:true
							}
						},
						disciplina:{
							select:{
								nome:true
							}
						}
					}
				}
			},					
		})
		return calendar
	}
}

export default new ReadCalendarModel()