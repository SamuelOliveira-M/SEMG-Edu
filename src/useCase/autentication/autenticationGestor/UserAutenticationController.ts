import { Request,Response } from "express";

import userAutenticationServices from "./UserAutenticationServices";

class UserAutenticationServices {

	async userAtentication(req:Request, res:Response){
		const {email,senha}=req.body

		try{
			const token = await userAutenticationServices.createAtentication({
				email,
				senha
			})
	
			const userId = token.userId

			return res.json({token,cart})

		}catch(error){
			console.log(error)
			if(error instanceof Error){
				res.status(400).json({error:error.message})
			}
		}
	}
}

export default new UserAutenticationServices()