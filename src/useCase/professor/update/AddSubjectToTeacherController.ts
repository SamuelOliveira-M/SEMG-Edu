import { Request,Response } from "express"
import AddSubjectToTeacherModel from "./AddSubjectToTeacherModel"

class AddSubjectToTeacherController{
	async AddSubjectToTeacher(req:Request, res:Response){
		try{
			const { professorEmail, subjectNome}= req.body
			console.log(professorEmail)
			const teachersSubjects = await AddSubjectToTeacherModel.addSubjectToTeacher(professorEmail, subjectNome)
			res.json(teachersSubjects)
		}catch(e){
			console.log(e)
		}
	}
}
export default new AddSubjectToTeacherController()