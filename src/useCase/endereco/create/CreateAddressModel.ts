import { prisma } from "../../../lib/prisma"
import Validator from "../../../services/Validator"

interface IBodyAddress{     
	rua: string 
	cidade: string
	estado: string
	cep: string     
}

class CreateAddressModel{
	async createAddressModel({rua,cidade,estado,cep}:IBodyAddress,tx:any){
		
		const addressAlreadyExists = await tx.address.findFirst({
			where:{
				cep:cep
			}
		})

		if(addressAlreadyExists){
			return{
				"message":"Endereço já existe no sistema",
				"data":addressAlreadyExists
			}
		}

		const address = await tx.address.create({
			data:{
				rua,
				cidade,
				estado,
				cep
			}
		})

		return{
			"message":"Endereço criado com sucesso",
			"data":address
		}
	}
}

export default new CreateAddressModel()