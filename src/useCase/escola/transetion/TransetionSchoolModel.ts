import { prisma } from "../../../lib/prisma"
import IEndereco from "../../../interface/IAddrees"
import ISchool from "../../../interface/ISchool"
import CreateAddressModel from "../../endereco/create/CreateAddressModel"
import CreateSchoolModel from "../create/CreateSchoolModel"


class TransetionSchoolModel{
	async transetionSchoolModel(dataSchool:ISchool,dataAddress:IEndereco){
		const schoolCreationTransaction = await prisma.$transaction(async (tx) => {
			
			const address = await CreateAddressModel.createAddressModel(dataAddress,tx)
			
			dataSchool.addressId = address.data.id

			const school = await CreateSchoolModel.createSchoolModel(dataSchool,tx)
			
			return {
				address,
				school
			}

		});

		return schoolCreationTransaction
	}
}

export default new TransetionSchoolModel()