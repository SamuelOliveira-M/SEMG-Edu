import dayjs from 'dayjs'
import { prisma } from "../../lib/prisma"

class GenerateRefreshToken{
	async execute(userId:string, isAdmin:boolean){
		
		if(isAdmin){
			const expiresIn = dayjs().add(7,"days").unix(); 

			const generateRefreshToken = await prisma.refreshTokenGestor.create({
				data:{
					expiresIn,
					gestorId:userId
				}
			})

			return generateRefreshToken
		}

		const expiresIn = dayjs().add(7,"days").unix(); 

		const generateRefreshToken = await prisma.refreshTokenProfessor.create({
			data:{
				expiresIn,
				professorId:userId
			}
		})

		return generateRefreshToken
	}
}

export default new GenerateRefreshToken()