import { sign } from "jsonwebtoken"

class GenerateTokenProvider{

	async execute(id:string,userName:string,isAdmin:boolean){
		const keyToken = process.env.KEY_TOKEN

		if(keyToken != null){
			const token = sign({
				userId:id,
				userName:userName,
				isAdmin:isAdmin
			},
			keyToken,{
				subject: id,
				expiresIn: "120s"
			})
			return token
		}
	}
}

export default new GenerateTokenProvider()