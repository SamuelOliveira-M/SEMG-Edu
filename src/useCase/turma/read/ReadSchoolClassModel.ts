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

	async readSchoolClassAll(){
		const schoolClassAlreadyExist = await prisma.turma.findMany({
			include:{
				ano_letivo:true
			}

		})
					
		return schoolClassAlreadyExist
	}
}

export default new ReadSchoolClassModel()