import { any } from "joi";
import IStudent from "../../../interface/IStudent"
import { prisma } from "../../../lib/prisma"

class ReadStudentModel{
	async readStudent(studantName:string, MotherId:string){
		
		const alunoAlreadyExist = await prisma.aluno.findFirst({
			where: {
				nome: studantName,
				responsavel: {
					id: MotherId
				}
			},
			include: {
				matricula: true,
			},
		})
		return alunoAlreadyExist
	}

	async readNoRegistrationModel(){

		const matriculas = await prisma.aluno.findMany({
			where:{
				matricula:null
			},
		});
		console.log(matriculas)
		
		return matriculas
	}

	async readStudantsModel(){

		const studants = await prisma.aluno.findMany({
			include:{
				address:true,
				responsavel:true
			}
		});
		
		return studants
	}
}
export default new ReadStudentModel()