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
		
		const urlImage = req.headers.filebaseUrl as string||undefined;
		try{
				
			const errorStudent = await CreateAlunoController.createAlunoController(dataStudent) 
			
			if(errorStudent?.error){
				return res.status(400).json(errorStudent) 
			}
			
			const transactionStudant = await TransectionStudentModel.transactionStudantModel({
				dataStudent,
				dataAddress,
				dataResponsibile,
				urlImage
			})
			
			res.status(200).json(transactionStudant)

		}catch(e){
			res.status(500).json(e)
		}
	}
}

export default new TransactionStudantController()