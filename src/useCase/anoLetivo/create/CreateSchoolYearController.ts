import Validator from "../../../services/Validator";
import ISchoolYear from "../../../interface/ISchoolYear";

class CreateSchoolYearController{
	createSchoolYear(dataSchooYear:ISchoolYear){

	
		try{
			const validatorSchoolYear = Validator.schoolYearValidator(dataSchooYear)

			if(validatorSchoolYear){
				return({
					"error":true,
					"message":"O Campo "+validatorSchoolYear+" é invalido"
				});
			}
			
			return({
				"error":false,
				"message":"Campos validos"
			})
		}catch(e){
			console.log(e)
		}
	}
}
export default new CreateSchoolYearController()