import { prisma } from "../../../lib/prisma"
import IAddress from "../../../interface/IAddrees"

class ReadAddressModel{
	async readAddress(dataAddress:IAddress){
		
		const { rua, estado, cidade } = dataAddress

		const addressAlreadyExists = await prisma.address.findFirst({
			where:{
				rua,
				estado,
				cidade
			}
		})

		return addressAlreadyExists
	}
}

export default new ReadAddressModel()