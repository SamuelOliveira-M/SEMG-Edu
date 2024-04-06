import { Request,Response } from "express"
import AddSubjectToTeacherModel from "./AllocationOfTeacherModel"

class AllocationOfTeacherController{
	async AddSubjectToTeacher(req:Request, res:Response){
		try{
			const { professorEmail, subjectNome, className }= req.body
			const teachersSubjects = await AddSubjectToTeacherModel.addSubjectToTeacher(professorEmail, subjectNome,className)
			res.json(teachersSubjects)
		}catch(e){
			console.log(e)
		}
	}
}
export default new AllocationOfTeacherController()