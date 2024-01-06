import { Request,Response } from "express"
import Validator from "../../../services/Validator"
import CreateRegistrationModel from "./CreateSubjectsModel"


class CreateSubjectsController{
	async createSubjectsController(req:Request,res:Response){
		
		let dataSubject = req.body

		try{

			const validatorSubject = Validator.subjectValidator(dataSubject)

			
			if(validatorSubject){
				return res.json({
					"error":true,
					"message":"O Campo "+validatorSubject +" é invalido"
				})
			}
			
			const subject = await CreateRegistrationModel.createSubjectsModel(dataSubject)

			return res.json(subject)

		}catch(e){
			return res.json({
				"error":true,
				"message":"Erro desconhecido"
			})
		}
	}
}

export default new CreateSubjectsController()