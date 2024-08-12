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
		
		const matriculas = await prisma.$queryRaw`
			SELECT * FROM "Aluno"
			WHERE "id" IN (
					SELECT "alunoId" FROM "Matricula"
					WHERE "turmaId" = ${turmaId}
			)
			ORDER BY unaccent(LOWER("nome")) ASC; `;
		
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