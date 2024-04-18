import { compare } from "bcryptjs"
import { prisma } from "../../../lib/prisma"
import GenerateRefreshToken from "../../refreshtoken/GenerateRefreshToken"
import GenerateTokenProvider from "../../../services/GenerateTokenProvider"


interface IRequest{
	email:string,
	senha:string

}

class HeadmistressAutenticationModel{
	async createAtentication({email,senha}:IRequest){

		const headmistresslreadyExists = await prisma.gestor.findFirst({
			where:{
				email
			}
		})

		if(!headmistresslreadyExists){
			throw new Error(" User or password incorrect!")

		}
		
		const passwordMatch = await compare(senha,headmistresslreadyExists.senha)

		if(!passwordMatch){
			throw  new Error(" User or password incorrect!")
		}

		const token = await GenerateTokenProvider.execute(
			headmistresslreadyExists.id,
			headmistresslreadyExists.nome,
			true
		)
		
		await prisma.refreshTokenGestor.deleteMany({
			where:{
				gestorId:headmistresslreadyExists.id
			}	
		})

		const refreshToken = await GenerateRefreshToken.execute(headmistresslreadyExists.id,true)
		
		return {headmistresslreadyExists,token,refreshToken}
	}
	
}

export default new HeadmistressAutenticationModel()