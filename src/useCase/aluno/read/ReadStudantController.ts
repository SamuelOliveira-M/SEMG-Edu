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
}


export default new ReadStudantController()