import { compare } from "bcryptjs"
import { prisma } from "../../lib/prisma"
import CreateRefreshToken from "../refreshtoken/create/CreateRefreshToken"
import GenerateTokenProvider from "../../services/GenerateTokenProvider"


interface IRequest{
	email:string,
	senha:string

}

class AutenticationModel{
	async createAtentication({email,senha}:IRequest){

		const teacherAlreadyExists = await prisma.professor.findFirst({
			where:{
				email
			}
		})

		if(teacherAlreadyExists){
		
			const passwordMatch = await compare(senha,teacherAlreadyExists.senha)

			if(!passwordMatch){
				throw  new Error("User or password incorrect!")
			}

			const token = await GenerateTokenProvider.execute(teacherAlreadyExists.id,teacherAlreadyExists.nome,false)
			
			await prisma.refreshTokenProfessor.deleteMany({
				where:{
					professorId:teacherAlreadyExists.id
				}
			})

			const refreshToken = await CreateRefreshToken.execute(teacherAlreadyExists.id,false)
			
			return {teacherAlreadyExists,refreshToken,token}
		}

		const headmistressAlreadyExists = await prisma.gestor.findFirst({
			where:{
				email
			}
		})

		if(!headmistressAlreadyExists){
			throw new Error("Email or password incorrect!")
		}

		const passwordMatch = await compare(senha,headmistressAlreadyExists.senha)

		if(!passwordMatch){
			throw  new Error(" User or password incorrect!")
		}

		const token = await GenerateTokenProvider.execute(
			headmistressAlreadyExists.id,
			headmistressAlreadyExists.nome,
			true
		)
		
		await prisma.refreshTokenGestor.deleteMany({
			where:{
				gestorId:headmistressAlreadyExists.id
			}	
		})

		const refreshToken = await CreateRefreshToken.execute(headmistressAlreadyExists.id,true)
		
		return {headmistressAlreadyExists,token,refreshToken}
	}
}

export default new AutenticationModel()