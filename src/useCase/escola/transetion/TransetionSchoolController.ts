import { Request,Response } from "express"
import CreateAddresController from "../../endereco/create/CreateAddresController"
import CreateSchoolController from "../create/CreateSchoolController"
import TransetionSchoolModel from "./TransetionSchoolModel"

class TransetionSchoolController{
	async transetionSchool(req:Request,res:Response){
		const {dataSchool,dataAddress} = req.body
		try {
			const validateAddress = await CreateAddresController.createAddress(dataAddress)

			if(validateAddress.error){
				return res.json(validateAddress.message)
			}

			const validateSchool = CreateSchoolController.CreateSchool(dataSchool)
			
			if(validateSchool?.error){
				return res.json(validateSchool.message)
			}

			const school = await TransetionSchoolModel.transetionSchoolModel(dataSchool,dataAddress)

			return res.json(school)

		}catch(e){
			console.log(e)
		}
		
	}

}

export default new TransetionSchoolController()