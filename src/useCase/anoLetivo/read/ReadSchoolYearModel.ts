import { prisma } from "../../../lib/prisma"
import ISchoolYear from "../../../interface/ISchoolYear";

class ReadSchoolYearModel{
	async readSchoolYear(data_inicio:Date){
		
		const year = data_inicio.getFullYear();

		const schoolYearAlreadyExist = await prisma.anoLetivo.findFirst({
      where: {
        data_inicio: {
          gte: new Date(`${year}-01-01T00:00:00Z`), // Início do ano
          lt: new Date(`${year + 1}-01-01T00:00:00Z`), // Início do próximo ano
        },
      },
    });

		console.log(schoolYearAlreadyExist)
		return schoolYearAlreadyExist
		
	}
}

export default new ReadSchoolYearModel()