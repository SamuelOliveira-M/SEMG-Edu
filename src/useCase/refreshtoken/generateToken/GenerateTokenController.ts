import { Request,Response } from "express";
import GenerateTokenModel from "./GenerateTokenModel";

class GenerateTokenController{

	async generateToken(req: Request , res:Response){

		const refreshToken = req.body
		const currentDate = Math.floor(Date.now() / 1000);

		if(!refreshToken){
			return "RefreshToken not exists"
		}

		if('professorId' in refreshToken){
			const token = await GenerateTokenModel.ReadRefreshToken(
				refreshToken.id,
				refreshToken.professorId,
				currentDate
			)

			return res.json(token)
		}
		
		const token = await GenerateTokenModel.ReadRefreshToken(
			refreshToken.id,
			refreshToken.gestorId,
			currentDate
		)
		
		res.json(token)
	}

}

export default new GenerateTokenController