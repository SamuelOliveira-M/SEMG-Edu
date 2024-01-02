import IAddress from "../../../interface/IAddrees";
import CreateAddressModel from "./CreateAddressModel";
import Validator from "../../../services/Validator";

class CreateAddressController{
	async createAddress(dataAddress:IAddress):Promise<any>{
		
		try{
		const {rua,cidade,estado,cep} = dataAddress

			const validatorAddress = await Validator.addressValidar({rua,cidade,estado,cep})
			
			if(validatorAddress){
				return({
					"error":false,
					"message":"Endereço valido"
				})
			}

			return ({
				"error":true,
				"message":"Endereço invalido"
			})

		}catch(e){
			console.log(e)
		}
	}
}

export default new CreateAddressController