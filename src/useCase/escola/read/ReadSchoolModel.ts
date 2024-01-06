import { prisma } from "../../../lib/prisma"
import ISchool from "../../../interface/ISchool"

class ReadSchoolModel{
	async readSchool(dataSchool:ISchool){

		const {cod_inep} = dataSchool
		
		const schoolAlreadyExist = await prisma.escola.findFirst({
			where:{
				cod_inep,
			}
		});
		
		return schoolAlreadyExist

	}
}
export default new ReadSchoolModel()