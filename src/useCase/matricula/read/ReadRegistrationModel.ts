import IRegistration from "../../../interface/IRegistration"
import { prisma } from "../../../lib/prisma"


class ReadRegistrationModel{
	readRegistration(registrationId:string){

		const matriculas = prisma.matricula.findFirst({
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

	readclassRegistration(turmaId:string){
		
		const matriculas = prisma.matricula.findMany({
			where:{
				turmaId:turmaId
			},
			include:{
				aluno:true
			}
		})

		return matriculas
	}
	readclassRegistrationNotes(turmaId:string){
		
		const matriculas = prisma.matricula.findMany({
			where:{
				turmaId:turmaId
			},
			include:{
				notas:{
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