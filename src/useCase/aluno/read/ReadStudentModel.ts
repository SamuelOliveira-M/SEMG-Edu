import IStudent from "../../../interface/IStudent"
import { prisma } from "../../../lib/prisma"

class ReadStudentModel{
	async readStudent(dataStudent:IStudent){

		const {cpf} = dataStudent
		
		const alunoAlreadyExist = await prisma.aluno.findFirst({
			where:{
				cpf
			}
		})
		return ({
			"message":"Aluno criado com sucesso",	
			"data":alunoAlreadyExist
		})
	}

}
export default new ReadStudentModel()