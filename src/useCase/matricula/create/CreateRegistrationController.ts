import { Request,Response } from "express"
import Validator from "../../../services/Validator"
import CreateRegistrationModel from "./CreateRegistrationModel"


class CreateRegistrationController{
	async createAlunoController(req:Request,res:Response){
		
		let dataRegistration = req.body

		try{

			const ValidatorRegistration = Validator.registrationValidator(dataRegistration)

			
			if(ValidatorRegistration){
				return res.json({
					"error":true,
					"message":"O Campo "+ValidatorRegistration +" é invalido"
				})
			}
			
			const registration = await CreateRegistrationModel.createAlunoModel(dataRegistration)

			if(registration.erro){
				return res.json({
					"error":registration.erro,
					"message":registration.message
				})
			}

			return res.json(registration)

		}catch(e){
			return res.json({
				"error":true,
				"message":"Erro desconhecido"
			})
		}
	}
}

export default new CreateRegistrationController()