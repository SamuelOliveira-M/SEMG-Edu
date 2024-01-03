import Validator from "../../../services/Validator";
import ISchool from "../../../interface/ISchool";

class CreateSchoolController{
	CreateSchool(dataSchool:ISchool){

		try{
			const validatorSchool = Validator.schoolValidator(dataSchool)

			if(validatorSchool){
				return({
					"error":true,
					"message":"O Campo "+validatorSchool +" é invalido"
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

export default new CreateSchoolController()