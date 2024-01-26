import ReadTeacherModel from "./ReadTeacherModel"
import { Request,Response } from "express"

class ReadTeacherController{
	async readTeacherController(request:Request, response:Response){
		
		const {email} = request.body

		try{
			const teacher = await ReadTeacherModel.readTeacher(email)
			
			return response.json(teacher)

		}catch(e){
			response.json(e)
		}
	}
}

export default new ReadTeacherController()