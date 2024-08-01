import { Request,Response } from "express"
import Validator from "../../../services/Validator"
import ReadStudantModel from "./ReadStudantModel"

class ReadStudantController{
	async readNoRegistration(req:Request,res:Response){

		try{
			
			const studants = await ReadStudantModel.readNoRegistrationModel()
			return res.json(studants)

		}catch(e){
			console.log(e)
			return res.json({
				"error":true,
				"message":"Erro desconhecido"
			})
		}
	}

	async readAllStudants(req:Request,res:Response){
		const {query} = req.params
		try{
			
			const studants = await ReadStudantModel.readStudantsModel(query)
			return res.status(200).json(studants)

		}catch(e){
			console.log(e)
			return res.status(500).json({
				"error":true,
				"message":"Erro desconhecido"
			})
		}
	}



	async readStudantUniqueController (req:Request,res:Response){

		const studantId = req.params.studantId

		try{
			
			const studant = await ReadStudantModel.readStudantUniqueModel(studantId)
			return res.json(studant)

		}catch(e){
			console.log(e)
			return res.json({
				"error":true,
				"message":"Erro desconhecido"
			})
		}
	}
}


export default new ReadStudantController()