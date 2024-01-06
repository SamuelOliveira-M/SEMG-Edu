import IStudent from "../../../interface/IStudent"
import { prisma } from "../../../lib/prisma"

class ReadStudentModel{
	async readStudent(cpf:string){
		
		const alunoAlreadyExist = await prisma.aluno.findFirst({
			where:{
				cpf
			},
			include: {
				matricula: true,
			},
		})
		return alunoAlreadyExist
	}

}
export default new ReadStudentModel()