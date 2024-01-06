import { prisma } from "../../../lib/prisma";
import ISubject from "../../../interface/ISubject";
import ReadSubjectModel from "../read/ReadSubjectModel";

class CreateSubjectsModel{
	async createSubjectsModel(dataSubject:ISubject) {
		
		const {nome,carga_horaria} = dataSubject

		const subjectAlreadyExists= await ReadSubjectModel.readSubject(dataSubject)

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
			"message":"Disciplina criado com sucesso",	
			"data":subject
		}
	}
}

export default new CreateSubjectsModel()