import { prisma } from "../../../lib/prisma";
import IRegistration from "../../../interface/IRegistration";
import ReadStudentModel from "../../aluno/read/ReadStudentModel";


class CreateRegistrationModel{
	async createMatriculaModel(dataRegistration:IRegistration) {
		
		const {numero_matricula,status,escola,turma,cpf} = dataRegistration

		const studentAlreadyExists = await ReadStudentModel.readStudent(cpf)

		if (studentAlreadyExists && studentAlreadyExists.matricula) {
			return {
				"message":"Aluno já possui uma matricula",
				"data":studentAlreadyExists.matricula
			}
		}

		const school = await prisma.escola.findUnique({
			where: {
				cod_inep: escola,
			},
			include: {
				turmas: {
					where: {
						nome: turma,
					},
				},
			},
		});

		
		if (school) {
			
			if (school.turmas && school.turmas.length > 0) {
				if(studentAlreadyExists){
					const registration = await prisma.matricula.create({
						data:{
							numero_matricula,
							status,
							escolaId:school.id,
							turmaId:school.turmas[0].id,
							alunoId:studentAlreadyExists.id
						}
					})
			
					return {
						"erro":false,
						"message":"Matricula criado com sucesso",	
						"data":registration
					}
				}
			
			} else {
				return {
					"erro":true,
					"message":"Não existe essa turma"
				}
			}
		} 
		else {
			return {
				"erro":true,
				"message":"A Escola não existe no sistema"
			}
		}
		
	}
}

export default new CreateRegistrationModel()