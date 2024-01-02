import Validator from "../../../services/Validator"
import CreateAlunoModel from "./CreateAlunoModel"
import IAluno from "../../../interface/IStudent"


class CreateAlunoController{
	async createAlunoController(dataStudent:IAluno){
		const {
			nome,
			data_nascimento,
			municipio_nascimento,
			uf_nascimento,
			cpf,
			responsavelId,
			addressId
		} = dataStudent
		
		try{
			const ValidatorStudent = Validator.studentValidator(dataStudent)
		
			if(ValidatorStudent){
				return ValidatorStudent
			}

			const student = await CreateAlunoModel.createAlunoModel({
				nome,
				data_nascimento,
				municipio_nascimento,
				uf_nascimento,
				cpf,
				responsavelId,
				addressId
			})
			
			return student


		}catch(e){
			console.log(e)
		}
	}
}

export default new CreateAlunoController()