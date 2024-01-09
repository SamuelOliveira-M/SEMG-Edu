import { prisma } from "../../../lib/prisma"



class ReadManagerModel{
	async readManager(email:string){

		const managerAlreadyExists= await prisma.gestor.findUnique({
			where: {
				email: email,
			}
		});

		return managerAlreadyExists

	}

}

export default new ReadManagerModel()