import ReadTeacherModel from "./ReadTeacherModel"
import { Request,Response } from "express"

class ReadTeacherController{
	async readTeacherController(request:Request, response:Response){
		
		const {email} = request.body
		console.log(email)
		try{
			const teacher = await ReadTeacherModel.readTeacherModel(email)
			return response.json(teacher)

		}catch(e){
			response.json(e)
		}
	}

	async readAllTeachersController(request:Request, response:Response){
	
		try{
			const teacher = await ReadTeacherModel.readAllTeachersModel()
			return response.json(teacher)

		}catch(e){
			response.json(e)
		}
	}
}

export default new ReadTeacherController()