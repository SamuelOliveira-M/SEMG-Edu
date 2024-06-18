import IRegistration from "../../../interface/IRegistration"
import { prisma } from "../../../lib/prisma"


class ReadStudantModel{
	async readNoRegistrationModel(){

		const matriculas = await prisma.aluno.findMany({
			where:{
				matricula:null
			},
		});
		console.log(matriculas)
		
		return matriculas
	}
}

export default new ReadStudantModel()