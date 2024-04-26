import { prisma } from "../../../lib/prisma"
import GenerateTokenProvider from "../../../services/GenerateTokenProvider"


class GenerateTokenModel{
	async ReadRefreshToken(id:string){

		const currentDate = Math.floor(Date.now() / 1000);

		const refreshTokenTeacherAlreadyExists = await prisma.refreshTokenProfessor.findUnique({
			where:{
				id
			}
		})
		
		if(refreshTokenTeacherAlreadyExists){

			if(refreshTokenTeacherAlreadyExists.expiresIn<=currentDate){
				return 'Refreshtoken expirado'
			}

			const teacher = await prisma.professor.findUnique({
				where:{
					id:refreshTokenTeacherAlreadyExists.professorId
				}
			})

			if(!teacher){
				return 'Professor não existe'
			}

			const newToken = await GenerateTokenProvider.execute(
				refreshTokenTeacherAlreadyExists.professorId,
				teacher?.nome,
				false
			)

			return newToken
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

		const manager = await prisma.professor.findUnique({
			where:{
				id:refreshTokenAlreadyExists.gestorId
			}
		})

		if(!manager){
			return "Esse gestor não existe"
		}

		const newToken = await GenerateTokenProvider.execute(
			refreshTokenAlreadyExists.gestorId,
			manager?.nome,
			true
		)

		return newToken
	}
}

export default new GenerateTokenModel