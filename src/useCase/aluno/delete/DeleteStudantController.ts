import { Request,Response } from "express"
import DeleteStudantModel from "./DeleteStudantModel"

class DeleteStudantController{
	
	async DeleteStudant(req:Request,res:Response){

		const { studantId } = req.params

		try{
			
			const studants = await DeleteStudantModel.deleteStudantsModel(studantId)
			return res.status(200).json(studants)

		}catch(e){
			console.log(e)
			return res.status(500).json({
				"error":true,
				"message":"Erro desconhecido"
			})
		}
	}
}


export default new DeleteStudantController()