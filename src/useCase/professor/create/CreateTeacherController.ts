import { Request,Response } from "express"
import Validator from "../../../services/Validator"
import CreateTeacherModel from "./CreateTeacherModel"

class CreateTeacherController{
	async createTeacherController(req:Request,res:Response){
		
		let dataTeacher = req.body

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