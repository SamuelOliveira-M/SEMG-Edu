import { prisma } from "../../../lib/prisma"

class ReadSchoolClassModel{
	async readSchoolClass(nome:string,escolaId:string,ano_letivoId:string){
		const schoolClassAlreadyExist = await prisma.turma.findFirst({
			where: {
				nome: {
					equals: nome,
				},
				escolaId: {
					equals: escolaId,
				},
				ano_letivoId: {
					equals: ano_letivoId,
				},
			},
		});

		return schoolClassAlreadyExist
	}
}

export default new ReadSchoolClassModel()