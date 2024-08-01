import { prisma } from "../../../lib/prisma";
import IRegistration from "../../../interface/IRegistration";
import ReadStudentModel from "../../aluno/read/ReadStudantModel";


class CreateRegistrationModel{
	async createMatriculaModel(dataRegistration:IRegistration) {
		
		const {status,escola,idTurma,alunoId} = dataRegistration

		const studentAlreadyExists = await ReadStudentModel.readStudent(alunoId)

		const agora = new Date();
		const dataHora = agora.getFullYear().toString() +
				(agora.getMonth() + 1).toString().padStart(2, '0') +
				agora.getDate().toString().padStart(2, '0')

		const sufixo = Math.floor(1000 + Math.random() * 9000).toString();

		const matricula =  `${dataHora}${sufixo}`;
		console.log(matricula)

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
						id: idTurma,
					},
				},
			},
		});

		
		if (school) {
			
			if (school.turmas && school.turmas.length > 0) {
				if(studentAlreadyExists){
					const registration = await prisma.matricula.create({
						data:{
							numero_matricula:matricula,
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