// import { prisma } from "../../../lib/prisma";
import IStudent from "../../../interface/IStudent";
import ReadStudentModel from "../read/ReadStudantModel";

class CreateAlunoModel{
	async createAlunoModel (
		dataStudent: IStudent,
		tx:any,
		responsavelId:string,
		addressId:string,
		urlImage:string
		) {
		
		const {nome,data_nascimento,municipio_nascimento,uf_nascimento,cpf} = dataStudent 
		
		const dataNascimentos = new Date(data_nascimento)
		
		const alunoAlreadyExist = await ReadStudentModel.readStudent(cpf)
			

			if(alunoAlreadyExist){
				return {
					"message":"Aluno já existe no sistema",
					"data":alunoAlreadyExist
				}
			}
			
			const aluno = await tx.aluno.create({
				data:{
					nome,
					data_nascimento:dataNascimentos,
					municipio_nascimento,
					uf_nascimento,
					cpf,
					url_image:	urlImage,
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