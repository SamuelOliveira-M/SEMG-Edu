import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { JwtPayload } from "jsonwebtoken";

export function ensureAuthenticated(req:Request,res:Response,next:NextFunction){

	const authToken = req.headers.authorization
	const keyToken = process.env.KEY_TOKEN

	if(!authToken){
		return res.status(401).json({
			message:"token is missing"
		})
	}

	try {
		
		if(keyToken){
			verify(authToken,keyToken)
			return next()
		}

	}catch(error){
		return res.status(401).json({
			message:"token invalido"
		})
	}
}