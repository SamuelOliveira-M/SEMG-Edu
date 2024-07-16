import { ICalendarRead } from "../../../interface/ICalendar"
import { prisma } from "../../../lib/prisma"
import { adicionarAulas } from "../../../services/organizingDataStructures"

class ReadCalendarModel{
	async readCalendarModel(turmaId:string){
    const calendar = await prisma.calendario.findMany({
      orderBy:{
        ordemSemana:'asc'
      },
      select:{
        diaSemana:true,
        aulas:{
          orderBy:{
            horario:{
              horarioInicio:'asc'
            }
          },
          where:{
            lotacao:{
              turmaId
            }
          },
          select:{
            lotacao:{
              select:{
                professor:{
                  select:{
                    id:true,
                    nome:true
                  }
                },
                disciplina:{
                  select:{
                    id:true,
                    nome:true
                  }
                },  
              }
            },
            horario:true,
          }
        }
      }
    }) 

		return adicionarAulas(calendar) 
	}
}

export default new ReadCalendarModel()

