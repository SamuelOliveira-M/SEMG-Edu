import { prisma } from "../../../lib/prisma";
import IAluno from "../../../interface/IStudent";


class CreateAlunoModel{
	async createAlunoModel({ 
		nome,
		data_nascimento,
		municipio_nascimento,
		uf_nascimento,
		cpf,
		responsavelId,
		addressId
		}: IAluno) {
		
		const dataNascimentos = new Date(data_nascimento)


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

			const aluno = await prisma.aluno.create({
				data:{
					nome ,
					data_nascimento:dataNascimentos,
					municipio_nascimento,
					uf_nascimento,
					cpf,
					responsavelId,
					addressId
				}
			})

		return {
			"message":"Aluno criado com sucesso",	
			"data":aluno
		}
	}
}

export default new CreateAlunoModel()