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
			const { email } = request.body
			const teacher = await ReadTeacherModel.readTeachersClasses(email)
			return response.json(teacher)
		}catch(e){
			response.json(e)
		}
	}

}

export default new ReadTeacherController()