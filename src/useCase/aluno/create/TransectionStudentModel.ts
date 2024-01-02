import ITransaction from "../../../interface/ITransetion";
import { prisma } from "../../../lib/prisma";

import CreateAddressModel from "../../endereco/create/CreateAddressModel"; 
import CreateAlunoModel from "./CreateAlunoModel";
import CreateStudentGuardiansModel from "../../responsaveis/create/CreateStudentGuardiansModel";


class TransactionStudantModel{
	async transactionStudantModel({dataStudent,dataAddress,dataResponsibile}:ITransaction){
		
		const StudentCreationTransaction = await prisma.$transaction(async (tx) => {
			const address = await CreateAddressModel.createAddressModel(dataAddress,tx);
	
			const guardians = await CreateStudentGuardiansModel.createStudentGuardians(dataResponsibile,tx);
			
			const addressId = address.id
			const responsavelId = guardians.id
			console.log(responsavelId)

			const student = await CreateAlunoModel.createAlunoModel(
				dataStudent,
				tx,
				responsavelId,
				addressId
			);
			
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