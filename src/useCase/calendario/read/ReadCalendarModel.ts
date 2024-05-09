import ICalendar from "../../../interface/ICalendar"
import { prisma } from "../../../lib/prisma"

class ReadCalendarModel{
	async readCalendarModel(turmaId:string){


		const calendar = prisma.aula.findMany({
			where:{
				lotacao:{
					turma:{
						id:turmaId
					}
				}
			},
			orderBy:{
				calendario:{
					ordemSemana:'asc'
				}
			},
			select:{
				calendario:{
					select:{
						diaSemana:true,
						aulas:{
							select:{
								lotacao:{
									select:{
										professor:{
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
								},
								horario:{
									select:{
										horarioInicio:true,
										horarioFim:true
									}
								}
							}
						}
					}
				}
			}
		})

		return calendar
	}
}

export default new ReadCalendarModel()