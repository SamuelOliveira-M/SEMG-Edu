import { prisma } from "../../../lib/prisma";
import IStudentGuardians from "../../../interface/IStudentGuardians";

class CreateStudentGuardiansModel{
	async createStudentGuardians({ 
  	nome_pai, 
  	nome_mae,
  	telefone,
  	telefone_secundario
	}:IStudentGuardians,tx:any){

		const responsaveis = await tx.responsavel.findFirst({
			where: {
				nome_pai: nome_pai,
				nome_mae: nome_mae,
			},
		});

		if(responsaveis){
			return responsaveis
		}

		const studentGuardians = await tx.responsavel.create({
			data:{
				nome_pai,
				nome_mae,
				telefone,
				telefone_secundario
			}
		})
		return studentGuardians
		
	}
}
export default new CreateStudentGuardiansModel()
