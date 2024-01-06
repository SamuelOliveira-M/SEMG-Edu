import { prisma } from "../../../lib/prisma";
import IStudentGuardians from "../../../interface/IStudentGuardians";

class CreateStudentGuardiansModel{
	async createStudentGuardians({ 
  	nome_pai, 
  	nome_mae,
  	telefone,
  	telefone_secundario
	}:IStudentGuardians,tx:any){

		const responsaveisAlreadyExists = await tx.responsavel.findFirst({
			where: {
				nome_pai: {
					equals: nome_pai,
				},
				nome_mae: {
					equals: nome_mae,
				},
			},
		});

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
