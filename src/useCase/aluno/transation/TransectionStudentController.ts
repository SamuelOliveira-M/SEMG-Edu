import { Request,Response } from "express";

import CreateAddresController from "../../endereco/create/CreateAddresController";
import CreateStudentGuardiansController from "../../responsaveis/create/CreateStudentGuardiansController";
import CreateAlunoController from "../create/CreateAlunoController";

import TransectionStudentModel from "./TransectionStudentModel";


class TransactionStudantController{
	async studentCreationTransaction(req:Request,res:Response){
		const error = []
			
		const jsonString = req.body.data
		const { dataStudent, dataAddress, dataResponsibile } = JSON.parse(jsonString);
		
		const urlImage = req.headers.filebaseUrl as string;
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
				error.push(student)
			}

			if(error.length>0){
				res.json(error) 
			}

			const transactionStudant = await TransectionStudentModel.transactionStudantModel({
				dataStudent,
				dataAddress,
				dataResponsibile,
				urlImage
			})

			const file = transactionStudant.student.data.url_image

			const signedUrl = await file.getSignedUrl({
				action: 'read',
				expires: Date.now() + 60 * 60 * 1000, // 1 hora em milissegundos
			});

			console.log('URL assinado:', signedUrl[0]);


			res.json(transactionStudant)

		}catch(e){
			// if(error.length>0){
			// 	res.json(error)
			// }
			// res.status(500).json(e)
			console.log(e)
		}
	}
}

export default new TransactionStudantController()