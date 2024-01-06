import ISubject from "../../../interface/ISubject"
import { prisma } from "../../../lib/prisma"


class ReadSubjectModel{
	async readSubject(dataSubject:ISubject){
		
		const {nome} = dataSubject
		
		const subjectAlreadyExists= await prisma.disciplina.findFirst({
			where: {
				nome: nome,
			}
		});

		return subjectAlreadyExists
		
	}
}
export default new ReadSubjectModel()