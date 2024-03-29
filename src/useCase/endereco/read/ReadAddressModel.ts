import { prisma } from "../../../lib/prisma"
import IAddress from "../../../interface/IAddrees"

class ReadAddressModel{
	async readAddress(dataAddress:IAddress){
		
		const {cep} = dataAddress

		const addressAlreadyExists = await prisma.address.findUnique({
			where:{
				cep:cep
			}
		})

		return addressAlreadyExists
	}
}

export default new ReadAddressModel()