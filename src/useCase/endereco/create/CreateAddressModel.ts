import IAddress from "../../../interface/IAddrees"
import ReadAddressModel from "../read/ReadAddressModel"

class CreateAddressModel{
	async createAddressModel(dataAddress:IAddress,tx:any){
		
		const {rua,cidade,estado,cep} = dataAddress
		
		const addressAlreadyExists = await ReadAddressModel.readAddress(dataAddress)

		if(addressAlreadyExists){
			return{
				"message":"Endereço já existe no sistema",
				"data":addressAlreadyExists
			}
		}
		if(cep){
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
		
		const address = await tx.address.create({
			data:{
				rua,
				cidade,
				estado,
			}
		})
		return{
			"message":"Endereço criado com sucesso",
			"data":address
		}
	}
}

export default new CreateAddressModel()