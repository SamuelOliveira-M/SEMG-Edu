import { prisma } from "../../../lib/prisma"
import IGrade from "../../../interface/IGrade"

class ReadGradeModel{
	async readGrade(
		nota: number,
		mes: number,
		disciplinaId:string,
		matriculaId:string
	){
		
		// const {nota,mes} = dataGrade
		
		const gradeAlreadyExists = await prisma.avaliacao.findFirst({
			where: {
				nota: {
					equals: nota,
				},
				mes: {
					equals: mes,
				},
				disciplinaId:{
					equals: disciplinaId,
				},
				matriculaId:{
					equals: matriculaId,
				}
			},
		});

		return gradeAlreadyExists
	}
	async readGradeAluno(registrationId:string){
		
		const studantGrade = await prisma.avaliacao.findMany({
			where: {
				matriculaId:registrationId
			},
			include:{
				disciplina:true
			}
		});
	
		return studantGrade
	}
}

export default new ReadGradeModel()