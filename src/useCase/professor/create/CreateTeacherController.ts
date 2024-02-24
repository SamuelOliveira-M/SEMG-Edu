import { Request,Response } from "express"
import Validator from "../../../services/Validator"
import CreateTeacherModel from "./CreateTeacherModel"
import ITeacher from "../../../interface/ITeacher"

class CreateTeacherController{
	async createTeacherController(req:Request,res:Response){
		
		const dataTeacherJson = req.body.data
		
		let dataTeacher = JSON.parse(dataTeacherJson) 
		dataTeacher.url_image = req.headers.filebaseUrl as string;
		
		try{

			const validatorTeacher = Validator.teacherValidator(dataTeacher)

			
			if(validatorTeacher){
				return res.json({
					"error":true,
					"message":"O Campo "+validatorTeacher +" é invalido"
				})
			}
			
			const teacher = await CreateTeacherModel.createTeacherModel(dataTeacher) 
			
			return res.json(teacher)

		}catch(e){
			console.log(e)
			return res.json({
				"error":true,
				"message":"Erro desconhecido"
			})
		}
	}
}

export default new CreateTeacherController()