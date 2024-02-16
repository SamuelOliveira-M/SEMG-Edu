import { Request,Response } from "express"
import ReadSubjectModel from "./ReadSubjectModel"
import { ordenarAvaliacoes } from "../../../services/ordenacao"


class ReadSubjectOfGradeController{
	async gradesBySubject(req:Request,res:Response){
		
		const matriculaId = req.params.registrationId
		
		try{
			
			const grade = await ReadSubjectModel.gradesBySubjectModel(matriculaId)

			grade.map(disciplina => ({
				...disciplina,
				avaliacao: ordenarAvaliacoes(disciplina.avaliacao),
			}));

			return res.json(grade)

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