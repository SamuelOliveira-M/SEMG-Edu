
import { prisma } from "../../../lib/prisma"
import ITimeRange from "../../../interface/ITimeRange"
import CreateCalendarModel from "../create/CreateCalendarModel";
import CreateTimeRangeModel from "../../horario/create/CreateTimeRangeModel";
import CreateClassroomModel from "../../aula/create/CreateClassroomModel";
import { IClassroom } from "../../../interface/IClassroom";
import ReadAllocationOfTeacherModel from "../../allocation/allocationOfTeacher/read/ReadAllocationOfTeacherModel";

class TransetionCalendarModel{
	async transetionSchoolModel(
		weekDay:string,
		dataHorario:ITimeRange,
		allocationId:string,
	){
		const schoolCreationTransaction = await prisma.$transaction(async (tx) => {
			
			const calendar = await CreateCalendarModel.createCalendarModel(
				weekDay,
				tx
			)

			const horario = await CreateTimeRangeModel.CreateTimeRangeModel(
				dataHorario,
				tx
			)

			const lotacao = await ReadAllocationOfTeacherModel.lotacaoAlreadExist(
				allocationId
			) 

			if(!calendar.id){
				return 'calendar Não existe'
			}

			if(!horario.id){
				return 'Horario Não existe'
			}

			if(typeof lotacao !== 'object' ){
				return lotacao
			}
			
			const dataAula:IClassroom = {
				lotacaoId: lotacao.id, 
  			calendarioId: calendar.id,
  			horarioId: horario.id
			}

			const aula = await CreateClassroomModel.createClassroomModel(dataAula,tx)
			
			return aula

		});

		return schoolCreationTransaction
	}
}

export default new TransetionCalendarModel()