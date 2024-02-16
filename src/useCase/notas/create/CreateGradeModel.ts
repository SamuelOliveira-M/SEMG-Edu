import { prisma } from "../../../lib/prisma";
import IGrade from "../../../interface/IGrade";
import ReadSubjectModel from "../../disciplina/read/ReadSubjectModel";
import ReadGradeModel from "../read/ReadGradeModel";
import ReadSchoolYearModel from "../../anoLetivo/read/ReadSchoolYearModel";

class CreateGradeModel{
	async createGradeModel(dataGrade:IGrade) {
		
		const {tipo,nota,mes,semestre,disciplina,matriculaId,anoLetivo} = dataGrade
		

		const subjectAlreadyExist = await ReadSubjectModel.readSubject(disciplina)

		if(!subjectAlreadyExist){
			return({
				"erro":true,
				"message":"Disciplina inlida, não existe essa disciplina no sistema"
			})
		}

		const schoolYearAlreadyExist = await ReadSchoolYearModel.readSchoolYear(anoLetivo)
		if (!schoolYearAlreadyExist) {
			return {
				"message":"Ano letivo não existe",
				"data":schoolYearAlreadyExist
			}
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
		
		const grade = await prisma.avaliacao.create({
			data:{
				tipo,
				nota,
				mes,
				semestre,
				anoLetivoId:schoolYearAlreadyExist.id,
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