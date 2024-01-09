import IStudentGuardians from "../../../interface/IStudentGuardians";
import ReadStudentGuardiansModel from "../read/ReadStudentGuardiansModel"; 

class CreateStudentGuardiansModel{
	async createStudentGuardians(dataStudentGuardians:IStudentGuardians,tx:any){

		const {nome_pai,nome_mae,telefone,telefone_secundario} = dataStudentGuardians

		const responsaveisAlreadyExists = await ReadStudentGuardiansModel.readStudentGuardians(
			nome_pai,
			nome_mae,
		);

		if(responsaveisAlreadyExists){
			return{
				"message":"Responsável já existe no sistema",
				"data":responsaveisAlreadyExists
			}
		}

		const studentGuardians = await tx.responsavel.create({
			data:{
				nome_pai,
				nome_mae,
				telefone,
				telefone_secundario
			}
		})
		return{
			"message":"Responsavél criado com sucesso",
			"data":studentGuardians
		}
		
	}
}
export default new CreateStudentGuardiansModel()
