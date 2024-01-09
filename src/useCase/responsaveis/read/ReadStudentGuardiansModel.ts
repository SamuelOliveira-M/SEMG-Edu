import { prisma } from "../../../lib/prisma"


class ReadStudentGuardiansModel{
	async readStudentGuardians(nome_pai:string,nome_mae:string){
		
		const studentGuardiansAlreadyExists = await prisma.responsavel.findFirst({
			where: {
				nome_pai: {
					equals: nome_pai,
				},
				nome_mae: {
					equals: nome_mae,
				},
			},
		});

		return studentGuardiansAlreadyExists

	}
} 

export default new ReadStudentGuardiansModel()