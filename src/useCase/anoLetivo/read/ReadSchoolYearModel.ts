import { prisma } from "../../../lib/prisma"
import ISchoolYear from "../../../interface/ISchoolYear";

class ReadSchoolYearModel{
	async readSchoolYear(dataSchoolYear:ISchoolYear){
		
		const {data_inicio} = dataSchoolYear

		const schoolYearAlreadyExist = await prisma.anoLetivo.findFirst({
			where:{
				data_inicio
			}
		});

		return schoolYearAlreadyExist
		
	}
}

export default new ReadSchoolYearModel()