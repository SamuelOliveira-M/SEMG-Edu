import { Request,Response } from "express"
import Validator from "../../../services/Validator"
import CreateGradeModel from "./CreateGradeModel"
import ICreteGrade from "../../../interface/ICreteGrade"
import { assessmentData } from "../../../lib/enums"

class CreateGradeController{
	async CreateGradeController(req:Request,res:Response){
		
		let dataGrade = req.body
		dataGrade.matriculaId = req.params.registrationId	
		dataGrade.anoLetivo = new Date(dataGrade.anoLetivo,0,1)

		const {tipo,nota,mes,semestre,disciplina,matriculaId,anoLetivo} = dataGrade
		
		try{
			
			const validatorGrade = Validator.gradeValidator(dataGrade)
			
			
			if(validatorGrade){
				return res.json({
					"error":true,
					"message":"O Campo "+validatorGrade +" é invalido"
				})
			}
			
			const grade = await CreateGradeModel.createGradeModel(
				tipo,
				nota,
				mes,
				semestre,
				disciplina,
				matriculaId,
				anoLetivo
			)

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


	async ModifyGradeController(req:Request,res:Response){
		const dataGrade:ICreteGrade = req.body
		const newSchoolYear = new Date(dataGrade.anoLetivo,0,1)

		for (let key in dataGrade.avaliacao) {
			console.log(dataGrade.disciplinaId)
			const { mes, tipo, semestre } = assessmentData[dataGrade.avaliacao[key].header];

			if (mes !== undefined && tipo !== undefined && semestre !== undefined) {
	
				try {

					const gradeModel = await CreateGradeModel.createGradeModel(
						tipo,
						dataGrade.avaliacao[key].nota,
						mes,
						semestre,
						dataGrade.disciplinaId,
						dataGrade.avaliacao[key].matricula,
						newSchoolYear

					);
			
				} catch (error) {
					console.error("Erro ao criar grade model:", error);
					return res.json(error); // Isso irá parar a execução do loop caso ocorra um erro
				}
			}
		}
	}
}

export default new CreateGradeController()