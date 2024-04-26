import { Request,Response } from "express";
import GenerateTokenModel from "./GenerateTokenModel";

class GenerateTokenController{

	async generateToken(req: Request , res:Response){

		const { refreshTokenId } = req.body
		
		if(!refreshTokenId){
			return "RefreshToken not exists"
		}
		console.log(refreshTokenId)

		const token = await GenerateTokenModel.ReadRefreshToken(
			refreshTokenId
		)

		return res.json(token)
	}
}

export default new GenerateTokenController