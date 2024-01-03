import { prisma } from "../../../lib/prisma"
import CreateSchoolYearModel from "../../anoLetivo/create/CreateSchoolYearModel";
import CreateSchoolClassModel from "../create/CreateSchoolClassModel";

class TransetionSchoolClassModel{
	async TransetionSchoolClassModel(dataSchooYear:ISchoolYear,dataSchoolClass:ISchollClass,cod_inep:string){
		
		
		const schoolClassCreationTransaction = await prisma.$transaction(async (tx) => {
			
			const SchoolAlreadyExist = await prisma.escola.findFirst({
				where:{
					cod_inep
				}
			})

			if(!SchoolAlreadyExist){
				return "Escola não existe"
			}

			const schoolYear = await CreateSchoolYearModel.createSchoolYearModel(dataSchooYear,tx)
			
			dataSchoolClass.escolaId = SchoolAlreadyExist.id
			dataSchoolClass.ano_letivoId = schoolYear.data.id

			const schoolClass = await CreateSchoolClassModel.schoolClassModel(dataSchoolClass,tx)
			
			return {
				schoolYear,
				schoolClass
			}

		});
		return schoolClassCreationTransaction
	}
}
export default new TransetionSchoolClassModel()