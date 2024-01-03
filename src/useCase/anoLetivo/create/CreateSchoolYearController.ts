import Validator from "../../../services/Validator";

class CreateSchoolYearController{
	createSchoolYear(dataSchooYear:ISchoolYear){

		dataSchooYear.data_inicio = new Date(dataSchooYear.data_inicio)
		dataSchooYear.data_finalizacao = new Date(dataSchooYear.data_finalizacao)

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