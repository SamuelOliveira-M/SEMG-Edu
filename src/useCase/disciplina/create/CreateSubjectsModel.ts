import { prisma } from "../../../lib/prisma";
import ISubject from "../../../interface/ISubject";

class CreateSubjectsModel{
	async createSubjectsModel(dataSubject:ISubject) {
		
		const {nome,carga_horaria} = dataSubject

		const subjectAlreadyExists= await prisma.disciplina.findUnique({
			where: {
				id: nome,
			}
		});

		if (subjectAlreadyExists) {
			return {
				"message":"Disciplina já existe no sistema",
				"data":subjectAlreadyExists
			}
		}

		const subject = await prisma.disciplina.create({
			data:{
				nome,
				carga_horaria
			}
		})
		
		return {
			"erro":false,
			"message":"Disciplina criado com sucesso",	
			"data":subject
		}
	}
}

export default new CreateSubjectsModel()