import { prisma } from "../../../lib/prisma";
import IStudentGuardians from "../../../interface/IStudentGuardians";

class CreateStudentGuardiansModel{
	async createStudentGuardians({ 
  	nome_pai, 
  	nome_mae,
  	telefone,
  	telefone_secundario
	}:IStudentGuardians){

		const responsaveis = await prisma.responsavel.findFirst({
			where: {
				nome_pai: nome_pai,
				nome_mae: nome_mae,
			},
		});

		if(responsaveis){
			return {
				"message":"Resposáveis já cadastrados no sistema",
				"data":responsaveis
			}
		}

		const studentGuardians = await prisma.responsavel.create({
			data:{
				nome_pai,
				nome_mae,
				telefone,
				telefone_secundario
			}
		})
		return {
			"message":"Resposáveis cadastrados com socesso",
			"data":studentGuardians
		}
	}
}
export default new CreateStudentGuardiansModel()
