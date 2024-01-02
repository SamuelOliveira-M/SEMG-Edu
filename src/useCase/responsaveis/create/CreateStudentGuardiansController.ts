import IStudentGuardians from "../../../interface/IStudentGuardians";
import Validator from "../../../services/Validator";
import CreateStudentGuardiansModel from "./CreateStudentGuardiansModel";

class CreateStudentGuardiansController{
	async CreateStudentGuardians(dataResponsibile:IStudentGuardians){
		
		const {nome_pai, nome_mae,telefone,telefone_secundario} = dataResponsibile

		const validatorStudentGuardions = Validator.StudentGuardionsValidator({
			nome_pai,
			nome_mae,
			telefone,
			telefone_secundario
		})
		

		if(validatorStudentGuardions){
			return({
				"error":true,
				"message":"O campo "+validatorStudentGuardions+" é invalido"
			})
		}

		return({
			"error":false,
			"message":"Campos validos"
		})
			
		
	}
}

export default new CreateStudentGuardiansController()