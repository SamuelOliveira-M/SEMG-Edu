import { Request,Response } from "express"
import ReadSubjectModel from "./ReadSubjectModel"

class ReadSubjectController{
	async classTeacherSubjects(req:Request,res:Response){
		const {turmaId,professorId} = req.params
		
		try{
			const teacherSubjects = await ReadSubjectModel.classTeacherSubjects(turmaId,professorId)
			return res.status(201).json(teacherSubjects)
			
		}catch(e){	
			console.log(e)
			return res.json({
				"error":true,
				"message":"Erro desconhecido"
			})
		}
	}

}

export default new ReadSubjectController()