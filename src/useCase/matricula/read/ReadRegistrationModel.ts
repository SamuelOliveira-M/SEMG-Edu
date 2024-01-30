import IRegistration from "../../../interface/IRegistration"
import { prisma } from "../../../lib/prisma"


class ReadRegistrationModel{
	readRegistration(dataRegistration:IRegistration){

		const matriculas = prisma.matricula.findMany({
			where: {
				status: 'ativa',
			},
		});
		
		return matriculas

	}
}

export default new ReadRegistrationModel()