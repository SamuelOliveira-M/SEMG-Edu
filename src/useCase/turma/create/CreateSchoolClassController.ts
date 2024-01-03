import Validator from "../../../services/Validator";

class CreateSchoolClassController{
	createSchoolClass(dataSchoolClass:ISchollClass){
		try{
			const validatorSchoolClass = Validator.schoolClassValidator(dataSchoolClass)

			if(validatorSchoolClass){
				return({
					"error":true,
					"message":"O Campo "+validatorSchoolClass+" é invalido"
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
export default new CreateSchoolClassController()