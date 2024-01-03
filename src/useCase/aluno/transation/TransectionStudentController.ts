import { Request,Response } from "express";

import CreateAddresController from "../../endereco/create/CreateAddresController";
import CreateStudentGuardiansController from "../../responsaveis/create/CreateStudentGuardiansController";
import CreateAlunoController from "../create/CreateAlunoController";

import TransectionStudentModel from "./TransectionStudentModel";


class TransactionStudantController{
	async studentCreationTransaction(req:Request,res:Response){
		const error = []
		
		const {dataStudent,dataAddress,dataResponsibile} = req.body

		try{
			const address = await CreateAddresController.createAddress(dataAddress)

			if(address.error){
				error.push(address)
			}

			const resposibile = await CreateStudentGuardiansController.CreateStudentGuardians(dataResponsibile)
			if(resposibile.error){
				error.push(resposibile)
			}

			dataStudent.data_nascimento = new Date(dataStudent.data_nascimento)
			
			const student = await CreateAlunoController.createAlunoController(dataStudent) 
			if(student?.error){
				console.log(student?.error)
				error.push(student)
			}

			console.log(error)

			if(error.length>0){
				res.json(error) 
			}

			const transactionStudant = await TransectionStudentModel.transactionStudantModel({
				dataStudent,
				dataAddress,
				dataResponsibile
			})
			res.json(transactionStudant)

		}catch(e){
			console.log(e)
		}
	}
}

export default new TransactionStudantController()