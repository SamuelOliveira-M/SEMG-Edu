import ITransaction from "../../../interface/ITransetion";
import { prisma } from "../../../lib/prisma";


class TransactionStudantModel{
	async transactionStudantModel(data:ITransaction){
		 
		const StudentCreationTransaction = await prisma.$transaction(async()=>{
			

		})

	}

} 