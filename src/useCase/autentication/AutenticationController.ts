import { Request,Response } from "express";
import AutenticationModel from "./AutenticationModel";

class AutenticationController {

	async authenticate(req:Request, res:Response){
		const {email,senha}=req.body

		try{
			const token = await AutenticationModel.createAtentication({
				email,
				senha
			})
	
			return res.status(201).json(token)

		}catch(error){
			console.log(error)
			if(error instanceof Error){
				res.status(401).json({error:error.message})
			}
		}
	}
}

export default new AutenticationController()