import IRegistration from "../../../interface/IRegistration"
import { prisma } from "../../../lib/prisma"


class ReadRegistrationModel{
	async readRegistration(registrationId:string){

		const matriculas = await prisma.matricula.findFirst({
			where: {
				id: registrationId,
			},
			include:{
				aluno:{
					include: {
						responsavel: true,
						address:true
					},
				},
				turma:{
					include:{
						ano_letivo:true
					}
				},
				
			}

		});
		
		return matriculas
	}

	async readclassRegistration(turmaId:string){
		
		const matriculas = await prisma.matricula.findMany({
			where:{
				turmaId:turmaId
			},
			include:{
				aluno:true
			}
		})

		return matriculas
	}
	async readclassRegistrationNotes(turmaId:string){
		
		const matriculas = await prisma.matricula.findMany({
			where:{
				turmaId:turmaId
			},
			include:{
				avaliacao:{
					include:{
						disciplina:true
					}
				}
			}
		})

		return matriculas
	}
}

export default new ReadRegistrationModel()