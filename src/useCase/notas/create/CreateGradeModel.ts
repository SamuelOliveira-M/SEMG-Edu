import { prisma } from "../../../lib/prisma";
import IGrade from "../../../interface/IGrade";
import ReadSubjectModel from "../../disciplina/read/ReadSubjectModel";
import ReadGradeModel from "../read/ReadGradeModel";

class CreateGradeModel{
	async createGradeModel(dataGrade:IGrade) {
		
		const {nota,mes,disciplina,matriculaId} = dataGrade


		const subjectAlreadyExist = await ReadSubjectModel.readSubject(disciplina)

		if(!subjectAlreadyExist){
			return({
				"erro":true,
				"message":"Disciplina inlida, não existe essa disciplina no sistema"
			})
		}

		const gradeAlreadyExists = await ReadGradeModel.readGrade(
			dataGrade,
			subjectAlreadyExist.id,
			matriculaId
		)

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