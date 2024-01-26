import { Request,Response } from "express"
import ReadSchoolClassModel from "./ReadSchoolClassModel"

class ReadSchoolClassController{
	async readSchoolClass(req:Request,res:Response){
		try{

			const schoolClass = await ReadSchoolClassModel.readSchoolClassAll()
			

			res.json(schoolClass)

		}catch(e){
			console.log(e)
		}
	}
}

export default new ReadSchoolClassController()