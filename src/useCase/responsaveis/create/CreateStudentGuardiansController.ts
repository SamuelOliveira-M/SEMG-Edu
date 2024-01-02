import IStudentGuardians from "../../../interface/IStudentGuardians";
import Validator from "../../../services/Validator";
import CreateStudentGuardiansModel from "./CreateStudentGuardiansModel";

class CreateStudentGuardiansController{
	async CreateStudentGuardians(dataResponsibile:IStudentGuardians){
		const {nome_pai, nome_mae,telefone,telefone_secundario} = dataResponsibile

		try{
			const validatorStudentGuardions = Validator.StudentGuardionsValidator({
				nome_pai,
				nome_mae,
				telefone,
				telefone_secundario
			})
			

			if(validatorStudentGuardions){
				return validatorStudentGuardions
			}

			const studentGuardions = await CreateStudentGuardiansModel.createStudentGuardians({
				nome_pai,
				nome_mae,
				telefone,
				telefone_secundario
			})
			
			return studentGuardions
			
		}catch(e){
			console.log(e)
		}
	}
}

export default new CreateStudentGuardiansController()