import { Request,Response } from "express"
import ReadManagerModel from "./ReadManagerModel"

class ReadManagerController{
	async readManagerController(req:Request,res:Response){
		
		const {email,senha} = req.body

		const managerAlreadyExists= await ReadManagerModel.readManager(email)
		
		return res.json(managerAlreadyExists)

	}
}

export default new ReadManagerController()