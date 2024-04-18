import { compare } from "bcryptjs"
import { prisma } from "../../../lib/prisma"
import GenerateRefreshToken from "../../refreshtoken/GenerateRefreshToken"
import GenerateTokenProvider from "../../../services/GenerateTokenProvider"


interface IRequest{
	email:string,
	senha:string

}

class TeacherAutenticationModel{
	async createAtentication({email,senha}:IRequest){

		const teacherAlreadyExists = await prisma.professor.findFirst({
			where:{
				email
			}
		})

		if(!teacherAlreadyExists){
			throw new Error("User or password incorrect!")
		}
		
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

		const refreshToken = await GenerateRefreshToken.execute(teacherAlreadyExists.id,false)
		
		return {teacherAlreadyExists,refreshToken,token}
	}
}

export default new TeacherAutenticationModel()