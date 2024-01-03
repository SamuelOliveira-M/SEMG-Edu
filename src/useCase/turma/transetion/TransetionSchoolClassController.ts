import { Request,Response } from "express"
import CreateSchoolYearController from "../../anoLetivo/create/CreateSchoolYearController"
import TransetionSchoolClassModel from "./TransetionSchoolClassModel"


class TransetionSchoolClassController{
	async transetionSchoolClass(req:Request,res:Response){
		
		const {dataSchoolYear,dataSchoolClass} = req.body
		const {cod_inep} = req.params

		try {
			

			const SchoolYear = CreateSchoolYearController.createSchoolYear(dataSchoolYear)
			if(SchoolYear?.error){
				return res.json(SchoolYear.message)
			}
			
			const schoolClass = await TransetionSchoolClassModel.TransetionSchoolClassModel(
				dataSchoolYear,
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