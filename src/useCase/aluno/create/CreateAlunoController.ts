import Validator from "../../../services/Validator"
import IStudent from "../../../interface/IStudent"


class CreateAlunoController{
	async createAlunoController(dataStudent:IStudent){
		
		try{
			const ValidatorStudent = Validator.studentValidator(dataStudent)

			console.log(ValidatorStudent)
			if(ValidatorStudent){
				return({
					"error":true,
					"message":"O Campo "+ValidatorStudent +" é invalido"
				})
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

export default new CreateAlunoController()