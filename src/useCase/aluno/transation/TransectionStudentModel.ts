import ITransaction from "../../../interface/ITransetion";
import { prisma } from "../../../lib/prisma";

import CreateAddressModel from "../../endereco/create/CreateAddressModel"; 
import CreateAlunoModel from "../create/CreateAlunoModel";
import CreateStudentGuardiansModel from "../../responsaveis/create/CreateStudentGuardiansModel";


class TransactionStudantModel{
	async transactionStudantModel({dataStudent,dataAddress,dataResponsibile,urlImage}:ITransaction){
		
		const StudentCreationTransaction = await prisma.$transaction(async (tx) => {
			
			const address = await CreateAddressModel.createAddressModel(dataAddress,tx);

			const guardians = await CreateStudentGuardiansModel.createStudentGuardians(dataResponsibile,tx);
			
			const addressId = address.data.id
			const responsavelId = guardians.data.id

			const student = await CreateAlunoModel.createAlunoModel(
				dataStudent,
				tx,
				responsavelId,
				addressId,
				urlImage
			);
			console.log(student)
			
			return {
				"address":address,
				"guardians":guardians,
				"student":student
			};
		});

		return StudentCreationTransaction
	}

} 

export default new TransactionStudantModel()