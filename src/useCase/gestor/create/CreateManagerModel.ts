import { prisma } from "../../../lib/prisma";
import IManager from "../../../interface/IManager";
import { hash } from "bcryptjs";
import ReadManagerModel from "../read/ReadManagerModel";



class CreateManagerModel{
	async createManagerModel(dataManager:IManager) {
		
		const {nome,email,senha} = dataManager

		const managerAlreadyExists= await ReadManagerModel.readManager(email)

		if (managerAlreadyExists) {
			return {
				"message":"Gestor já existe no sistema",
				"data":managerAlreadyExists
			}
		}

		const passwordHash = await hash(senha,8)

		const manager = await prisma.gestor.create({
			data:{
				nome,
				email,
				senha:passwordHash
			}
		})
		
		return {
			"message":"Gestor criado com sucesso",	
			"data":manager
		}
	}
}

export default new CreateManagerModel()