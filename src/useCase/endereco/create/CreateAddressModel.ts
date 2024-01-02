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
			return addressAlreadyExists
		}

		const address = await tx.address.create({
			data:{
				rua,
				cidade,
				estado,
				cep
			}
		})

		return address
	}
}

export default new CreateAddressModel()