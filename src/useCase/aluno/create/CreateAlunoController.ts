import { Request,Response } from "express"
import Validator from "../../../services/Validator"
import CreateAlunoModel from "./CreateAlunoModel"

class CreateAlunoController{
	async createAlunoController(req:Request,res:Response){
		
		const {dataStudent,dataAddrees,dataResponsibile} = req.body 

		// let {
		// 	nome ,
		// 	data_nascimento,
		// 	cpf,
		// 	municipio_nascimento,
		// 	uf_nascimento,
		// 	responsavelId, 
		// 	addressId} = dataStudent
		
		// const {rua,cidade,estado,cep} = dataAddrees

		// const {nome_pai,nome_mae,telefone,telefone_secundario} = dataResponsibile
		
		
		try{

			// data_nascimento = new Date(data_nascimento)

			// const validadorEndereco = Validator.validarCep({rua,cidade,estado,cep})
				
			// const validadorAluno = Validator.validarAluno({
			// 	nome ,
			// 	data_nascimento,
			// 	cpf,
			// 	municipio_nascimento,
			// 	uf_nascimento,
			// 	responsavelId, 
			// 	addressId
			// })
			const data = req.body
			const certo = await CreateAlunoModel.createAluno({data})

			
			res.json(certo)
 			


		}catch(e){

		}

	}
}

export default new CreateAlunoController()