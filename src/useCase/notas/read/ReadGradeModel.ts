import { prisma } from "../../../lib/prisma"
import IGrade from "../../../interface/IGrade"

class ReadGradeModel{
	async readGrade(dataGrade:IGrade,disciplinaId:string,matriculaId:string){
		
		const {nota,mes} = dataGrade
		
		const gradeAlreadyExists = await prisma.nota.findFirst({
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
}

export default new ReadGradeModel()