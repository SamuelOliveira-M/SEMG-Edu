import { Request,Response } from "express"
import Validator from "../../../services/Validator"
import ReadRegistrationModel from "./ReadRegistrationModel"

class ReadRegistrationController{
	async readMatriculaController(req:Request,res:Response){
		
		const id = req.params.classId

		try{
			
			const registration = await ReadRegistrationModel.readclassRegistration(id)
			console.log(registration)
			return res.json(registration)

		}catch(e){
			console.log(e)
			return res.json({
				"error":true,
				"message":"Erro desconhecido"
			})
		}
	}
	async readRegistrationUniqueController(req:Request,res:Response){
		
		const id = req.params.classId

		try{
			
			const registration = await ReadRegistrationModel.readRegistration(id)
			return res.json(registration)

		}catch(e){
			console.log(e)
			return res.json({
				"error":true,
				"message":"Erro desconhecido"
			})
		}
	}

	async readRegistrationNotesController(req:Request,res:Response){
		
		const id = req.params.classId

		try{
			
			const registration = await ReadRegistrationModel.readclassRegistrationNotes(id)
			return res.json(registration)

		}catch(e){
			console.log(e)
			return res.json({
				"error":true,
				"message":"Erro desconhecido"
			})
		}
	}
}


export default new ReadRegistrationController()