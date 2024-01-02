import IAddress from "../../../interface/IAddrees";
import CreateAddressModel from "./CreateAddressModel";
import Validator from "../../../services/Validator";

class CreateAddressController{
	async createAddress(dataAddress:IAddress):Promise<any>{
		
		try{
		const {rua,cidade,estado,cep} = dataAddress

			const validatorAddress = await Validator.addressValidar({rua,cidade,estado,cep})
			
			if(!validatorAddress){
				return({
					"error":true,
					"message":"Endereço invalido"
				})
			}

			// const address = await CreateAddressModel.createAddressModel({rua,cidade,estado,cep})

			return(validatorAddress)			
		}catch(e){
			console.log(e)
		}
	}
}

export default new CreateAddressController