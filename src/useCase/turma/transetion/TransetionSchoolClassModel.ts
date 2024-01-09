import { prisma } from "../../../lib/prisma"
import ISchoolYear from "../../../interface/ISchoolYear";
import CreateSchoolYearModel from "../../anoLetivo/create/CreateSchoolYearModel";
import CreateSchoolClassModel from "../create/CreateSchoolClassModel";
import ISchollClass from "../../../interface/ISchoolClass";

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
			
			const nomeTurma = `${dataSchoolClass.serie} ano ${dataSchoolClass.nome} - ${dataSchoolClass.turno} - ${schoolYear.data.data_inicio}`
			
			dataSchoolClass.escolaId = SchoolAlreadyExist.id
			dataSchoolClass.ano_letivoId = schoolYear.data.id
			dataSchoolClass.nome = nomeTurma

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