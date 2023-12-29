import { prisma } from "../../../lib/prisma";
import CreateAddressModel from "../../endereco/create/CreateAddressModel"
import CreateStudentGuardiansModel from "../../responsaveis/create/CreateStudentGuardiansModel"
import ITransaction from "../../../interface/ITransetion";


class CreateAlunoModel{
	async createAluno({ data }: ITransaction) {
    
		const { dataStudent, dataAddress, dataResponsibile } = data;

		let {
			nome,
			data_nascimento,
			municipio_nascimento,
			uf_nascimento,
			cpf
		} = dataStudent;

		data_nascimento = new Date(data_nascimento)


		const {rua,cidade,estado,cep} = dataAddress

		const {nome_pai, nome_mae,telefone,telefone_secundario} = dataResponsibile
		
		const alunoFull = await prisma.$transaction(async()=>{
			try{

			

			const endereco = await CreateAddressModel.createAddress({rua,cidade,estado,cep}) 
			
			const responsavel = await CreateStudentGuardiansModel.createStudentGuardians(
				{nome_pai,nome_mae,telefone,telefone_secundario}
			)
			
			console.log(responsavel)

			const alunoAlreadyExist = await prisma.aluno.findFirst({
				where:{
					cpf
				}
			})

			if(alunoAlreadyExist){
				return {
					"message":"Aluno já existe no sistema",
					"data":alunoAlreadyExist
				}
			}

			console.log(endereco.id)

			const aluno = await prisma.aluno.create({
				data:{
					nome ,
					data_nascimento,
					municipio_nascimento,
					uf_nascimento,
					cpf,
					responsavelId:responsavel.data.id,
					addressId:endereco.id
				}
			})

			return aluno
			
			}
			catch(e){
				console.log(e)
			}
		})		
		
		console.log(alunoFull)

		return {
			"message":"Aluno criado com sucesso",	
			"data":alunoFull
		}
	}
}


export default new CreateAlunoModel()