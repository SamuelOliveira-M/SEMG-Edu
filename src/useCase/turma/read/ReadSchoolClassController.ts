import { Request,Response } from "express"
import ReadSchoolClassModel from "./ReadSchoolClassModel"

class ReadSchoolClassController{
	async readSchoolClass(req:Request,res:Response){
		try{
			const schoolClass = await ReadSchoolClassModel.readSchoolClassAll()
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

	async readSubjectAndTeacherOfClass(req:Request,res:Response){
		
		const id:string = req.params.id

		try{
			
			const schoolClass = await ReadSchoolClassModel.readSubjectAndTeacherOfClassModel(id)
			res.json(schoolClass)

		}catch(e){
			console.log(e)
		}

	}


}

export default new ReadSchoolClassController()