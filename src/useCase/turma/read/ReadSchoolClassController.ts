import { Request,Response } from "express"
import ReadSchoolClassModel from "./ReadSchoolClassModel"

class ReadSchoolClassController{
	async readSchoolClass(req:Request,res:Response){
		const { query } = req.params
		try{
			const schoolClass = await ReadSchoolClassModel.readSchoolClassAll(query)
			res.json(schoolClass)
		}catch(e){
			console.log(e)
		}
	}


	async readSchoolClassFindFirst(req:Request,res:Response){
		
		const id:string = req.params.id

		try{
			const schoolClass = await ReadSchoolClassModel.schoolClassFindFirst(id)
			res.json(schoolClass)

		}catch(e){
			console.log(e)
		}
	}

	async ReadTeacherClasses (req:Request,res:Response){
		
		const teacherId:string = req.params.id

		try{
			
			const teacherClasses = await ReadSchoolClassModel.readTeacherClasses(teacherId)
			res.json(teacherClasses)

		}catch(e){
			console.log(e)
		}

	}


}

export default new ReadSchoolClassController()