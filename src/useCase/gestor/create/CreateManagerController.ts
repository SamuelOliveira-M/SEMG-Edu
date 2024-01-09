import { Request,Response } from "express"
import Validator from "../../../services/Validator"
import CreateManagerModel from "./CreateManagerModel"

class CreateManagerController{
	async createTeacherController(req:Request,res:Response){
		
		let dataManager = req.body

		try{

			const validatorManager = Validator.teacherValidator(dataManager)

			
			if(validatorManager){
				return res.json({
					"error":true,
					"message":"O Campo "+validatorManager +" é invalido"
				})
			}
			
			const manager = await CreateManagerModel.createManagerModel(dataManager) 
			
			return res.json(manager)

		}catch(e){
			console.log(e)
			return res.json({
				"error":true,
				"message":"Erro desconhecido"
			})
		}
	}
}

export default new CreateManagerController()