import { prisma } from "../../../lib/prisma"
import GenerateTokenProvider from "../../../services/GenerateTokenProvider"


class GenerateTokenModel{
	async ReadRefreshToken(id:string,userId:string,currentDate:number){

		const isTeacher = await prisma.professor.findUnique({
			where:{
				id:userId
			}
		})

		if(isTeacher){

			const refreshTokenAlreadyExists = await prisma.refreshTokenProfessor.findUnique({
				where:{
					id
				}
			})

			if(!refreshTokenAlreadyExists){
				return 'Refresh Token invalido'
			}

			if(refreshTokenAlreadyExists.expiresIn<=currentDate){
				return 'Refreshtoken expirado'
			}

			const newToken = await GenerateTokenProvider.execute(isTeacher.id,
				isTeacher.nome,
				false
			)

			return newToken
		}

		const isHeadmistress = await prisma.professor.findUnique({
			where:{
				id:userId
			}
		})

		if(!isHeadmistress){
			return 'Refresh Token invalido'
		}

		const refreshTokenAlreadyExists = await prisma.refreshTokenGestor.findUnique({
			where:{
				id
			}
		})

		if(!refreshTokenAlreadyExists){
			return 'Refresh Token invalido'
		}

		if(refreshTokenAlreadyExists.expiresIn<=currentDate){
			return 'Refreshtoken expirado'
		}

		const newToken = await GenerateTokenProvider.execute(
			isHeadmistress.id,
			isHeadmistress.nome,
			true
		)

		return newToken
	}
}

export default new GenerateTokenModel