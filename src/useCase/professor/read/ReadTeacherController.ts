import ReadTeacherModel from "./ReadTeacherModel"
import { Request,Response } from "express"

class ReadTeacherController{
	async readTeacherController(request:Request, response:Response){
		
		const {email} = request.body

		try{
			console.log(email)
			const teacher = await ReadTeacherModel.readTeacher(email)
			console.log(teacher)
			return response.json(teacher)

		}catch(e){
			response.json(e)
		}
	}
}

export default new ReadTeacherController()