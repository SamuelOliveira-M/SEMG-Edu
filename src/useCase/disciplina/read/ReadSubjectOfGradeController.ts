import { Request,Response } from "express"
import ReadSubjectModel from "./ReadSubjectModel"
import { criarEstruturaDados } from "../../../services/organizingDataStructures"


class ReadSubjectOfGradeController{
	async gradesBySubject(req:Request,res:Response){
		
		const matriculaId = req.params.registrationId
		console.log(matriculaId)

		try{
			

			const grade = await ReadSubjectModel.gradesBySubjectModel(matriculaId)
			
			const subjectOfGrade = criarEstruturaDados(grade)
		
			return res.json(subjectOfGrade)

		}catch(e){	
			console.log(e)
			return res.json({
				"error":true,
				"message":"Erro desconhecido"
			})
		}
	}

}

export default new ReadSubjectOfGradeController()