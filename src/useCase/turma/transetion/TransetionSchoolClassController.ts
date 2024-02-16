import { Request,Response } from "express"
import CreateSchoolYearController from "../../anoLetivo/create/CreateSchoolYearController"
import TransetionSchoolClassModel from "./TransetionSchoolClassModel"
import ISchoolYear from "../../../interface/ISchoolYear"
import CreateSchoolClassController from "../create/CreateSchoolClassController"

class TransetionSchoolClassController{
	async transetionSchoolClass(req:Request,res:Response){
		
		const dataSchoolClass = req.body
		const {cod_inep} = req.params

		try {
			const dataFormatada = new Date();
			
			const createDate: ISchoolYear ={
				data_inicio: dataFormatada
			} 
			
			const validaitorSchoolYear = CreateSchoolYearController.createSchoolYear(createDate)
			if(validaitorSchoolYear?.error){
				return res.json(validaitorSchoolYear.message)
			}

			const validaitorSchoolClass = CreateSchoolClassController.createSchoolClass(dataSchoolClass)
			if(validaitorSchoolClass?.error){
				return res.json(validaitorSchoolClass.message)
			}
			
			const schoolClass = await TransetionSchoolClassModel.TransetionSchoolClassModel(
				createDate,
				dataSchoolClass,
				cod_inep
			);

			return res.json(schoolClass)

		}catch(e){
			console.log(e)
		}

	}

}
export default new TransetionSchoolClassController()