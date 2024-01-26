import ISchoolYear from "../../../interface/ISchoolYear";
import ReadSchoolYearModel from "../read/ReadSchoolYearModel";

class CreateSchoolYearModel{
	async createSchoolYearModel(dataSchooYear:ISchoolYear,tx:any){
		const {data_inicio} = dataSchooYear
		
		
		const schoolYearAlreadyExist = await ReadSchoolYearModel.readSchoolYear(dataSchooYear)

		if(schoolYearAlreadyExist){
			return {
				"message":"Escola já cadastrada",
				"data":schoolYearAlreadyExist
			}
		}

		const schoolYear = await tx.anoLetivo.create({
			data:{
				data_inicio,
			}
		});

		return {
			"message":"Escola cadastrada com socesso",
			"data":schoolYear
		}
	}
}
export default new CreateSchoolYearModel()