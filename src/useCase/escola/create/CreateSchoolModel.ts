import exp from "constants";
import { prisma } from "../../../lib/prisma";
import ISchool from "../../../interface/ISchool";


class CreateSchoolModel {
	async createSchoolModel(dataSchool:ISchool,tx:any){
		const {nome,cod_inep,email,addressId} = dataSchool
		
		const schoolAlreadyExist = await tx.escola.findFirst({
			where:{
				cod_inep,
			}
		});

		if(schoolAlreadyExist){
			return {
				"message":"Escola já cadastrada",
				"data":schoolAlreadyExist
			}
		}

		const school = await tx.escola.create({
			data:{
				nome,
				cod_inep,
				email,
				addressId
			}
		});

		return {
			"message":"Escola cadastrada com socesso",
			"data":school
		}
	}
} 

export default new CreateSchoolModel()
