import { Request,Response } from "express";
import GenerateTokenModel from "./GenerateTokenModel";

class GenerateTokenController{

	async generateToken(req: Request , res:Response){

		const refreshToken = req.body
		

		if(!refreshToken){
			return "RefreshToken not exists"
		}

		if('professorId' in refreshToken){
			const token = await GenerateTokenModel.ReadRefreshToken(
				refreshToken.id,
			)

			return res.json(token)
		}
		
		const token = await GenerateTokenModel.ReadRefreshToken(
			refreshToken.id,
		)
		
		res.json(token)
	}

}

export default new GenerateTokenController