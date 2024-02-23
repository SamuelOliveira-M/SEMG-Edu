import { Request,Response } from "express"
import RemoveSubjectFromTeacherModel from "./RemoveSubjectFromTeacherModel"


class RemoveSubjectFromTeacherController{
	async removeSubjectFromTeacher(req:Request, res:Response){
		try{
			const { professorEmail, subjectNome}= req.body
			
			const teachersSubjects = await RemoveSubjectFromTeacherModel.RemoveSubjectFromTeacherModel(professorEmail, subjectNome)
			res.json(teachersSubjects)
		
		}catch(e){
			console.log(e)
		}
	}

}
export default new RemoveSubjectFromTeacherController()