import ReadTeacherModel from "./ReadTeacherModel"
import { Request,Response } from "express"

class ReadTeacherController{
	
	async readAllTeachersController(request:Request, response:Response){	
		try{
			const teacher = await ReadTeacherModel.readAllTeachersModel()
			return response.json(teacher)
		}catch(e){
			response.json(e)
		}
	}

	async readTeachersClasses(request:Request, response:Response){
		try{
			const id = request.params.id
			const teacher = await ReadTeacherModel.readTeacher(id)
			console.log(teacher)
			return response.json(teacher)
			
		}catch(e){
			response.json(e)
		}
	}

}

export default new ReadTeacherController()