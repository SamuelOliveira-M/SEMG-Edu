import { any } from "joi";
import IStudent from "../../../interface/IStudent"
import { prisma } from "../../../lib/prisma"

class ReadStudentModel{
	async readStudent(studantName:string, MotherId:string){
		
		const alunoAlreadyExist = await prisma.aluno.findFirst({
			where: {
				nome: studantName,
				responsavel: {
					id: MotherId
				}
			},
			include: {
				matricula: true,
			},
		})
		return alunoAlreadyExist
	}

	async readNoRegistrationModel(){

		const matriculas = await prisma.aluno.findMany({
			where:{
				matricula:null
			},
		});
		console.log(matriculas)
		
		return matriculas
	}

	async readStudantsModel(searchTerm:string){

		if(searchTerm){
			const studants = await prisma.aluno.findMany({
				where: {
					nome: {
						contains: searchTerm, // Pesquisa de aproximação
						mode: 'insensitive', // Torna a pesquisa case-insensitive
					},
				},
				include:{
					address:true,
					responsavel:true,
					matricula:{
						select:{
							id:true
						}
					}
				}
			});
			return studants
		}

		const studants = await prisma.aluno.findMany({
			include:{
				address:true,
				responsavel:true,
				matricula:{
					select:{
						id:true
					}
				},
			}
		});
		
		return studants
	}

	async readStudantUniqueModel(studantId:string){
		const studant = await prisma.aluno.findUnique({
			where: {
				id:studantId
			},
			include:{
				matricula:{
					include:{
						turma:{
							include:{
								ano_letivo:true
							}
						}
					}
				},
				address:true,
				responsavel:true
			}
		});
		return studant
	}	
}
export default new ReadStudentModel()