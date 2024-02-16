import { Request,Response } from "express"
import Validator from "../../../services/Validator"
import CreateGradeModel from "./CreateGradeModel"

class CreateGradeController{
	async CreateGradeController(req:Request,res:Response){
		
		let dataGrade = req.body
		dataGrade.matriculaId = req.params.registrationId	
		dataGrade.anoLetivo = new Date(dataGrade.anoLetivo,0,1)

		try{
			
			const validatorGrade = Validator.gradeValidator(dataGrade)
			
			
			if(validatorGrade){
				return res.json({
					"error":true,
					"message":"O Campo "+validatorGrade +" é invalido"
				})
			}
			
			const grade = await CreateGradeModel.createGradeModel(dataGrade)

			if(grade.erro){
				return res.json({
					"error":grade.erro,
					"message":grade.message
				})
			}

			return res.json(grade)

		}catch(e){
			console.log(e)
			return res.json({
				"error":true,
				"message":"Erro desconhecido"
			})
		}
	}
}

export default new CreateGradeController()