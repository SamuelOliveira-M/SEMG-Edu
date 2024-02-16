import { Request,Response } from "express"
import Validator from "../../../services/Validator"
import ReadGradeModel from "./ReadGradeModel"

class ReadGradeController{
	async readRegistrationNotesController(req:Request,res:Response){
		
		const id = req.params.registrationId

		try{
			
			const registration = await ReadGradeModel.readGradeAluno(id)
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


export default new ReadGradeController()