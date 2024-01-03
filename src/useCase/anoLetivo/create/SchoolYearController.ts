import { Request,Response } from "express";
import Validator from "../../../services/Validator";

class SchoolYearController{
	createSchoolYear(dataSchooYear:ISchoolYear){
		
		try{
			const validatorSchoolYear = Validator.schoolYearValidator(dataSchooYear)

			if(validatorSchoolYear){
				return({
					"error":true,
					"message":"O Campo "+validatorSchoolYear+" é invalido"
				});
			}
			
			return({
				"error":false,
				"message":"Campos validos"
			})
		}catch(e){
			console.log(e)
		}
	}
}
export default new SchoolYearController()