import { Request,Response } from "express"
import AddSubjectToTeacherModel from "./AllocationOfTeacherModel"

class AllocationOfTeacherController{
	async AddSubjectToTeacher(req:Request, res:Response){
		try{
			const { teacherId, subjectId, classId }= req.body
			const teachersSubjects = await AddSubjectToTeacherModel.addSubjectToTeacher( teacherId, subjectId, classId )
			res.json(teachersSubjects)
		}catch(e){
			console.log(e)
		}
	}
}
export default new AllocationOfTeacherController()