import { prisma } from "../../../lib/prisma";
import IGrade from "../../../interface/IGrade";

class CreateGradeModel{
	async createGradeModel(dataGrade:IGrade) {
		
		const {nota,mes,disciplina,matriculaId} = dataGrade


		const subjectAlreadyExist = await prisma.disciplina.findFirst({
			where:{
				nome:disciplina
			}
		})

		if(!subjectAlreadyExist){
			return({
				"erro":true,
				"message":"Disciplina inlida, não existe essa disciplina no sistema"
			})
		}

		const gradeAlreadyExists = await prisma.nota.findFirst({
			where: {
				nota: {
					equals: nota,
				},
				mes: {
					equals: mes,
				},
				disciplinaId:{
					equals: subjectAlreadyExist.id,
				},
				matriculaId:{
					equals: matriculaId,
				}
			},
		});


		if (gradeAlreadyExists) {
			return {
				"message":"Nota já existe",
				"data":gradeAlreadyExists
			}
		}

		const grade = await prisma.nota.create({
			data:{
				nota,
				mes,
				disciplinaId:subjectAlreadyExist.id,
				matriculaId

			}
		})

		return {
			"message":"Matricula criado com sucesso",	
			"data":grade
		}
	}
}

export default new CreateGradeModel()