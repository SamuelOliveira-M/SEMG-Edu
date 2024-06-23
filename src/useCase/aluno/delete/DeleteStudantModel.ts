import IStudent from "../../../interface/IStudent"
import { prisma } from "../../../lib/prisma"

class DeleteStudantModel{
	async deleteStudantsModel(studantId:string){

		const studants = await prisma.aluno.delete({
			where:{
				id:studantId
			}
		});
		
		return studants
	}
}
export default new DeleteStudantModel()