

class CreateSchoolYearModel{
	async createSchoolYearModel(dataSchooYear:ISchoolYear,tx:any){
		const {data_inicio,data_finalizacao} = dataSchooYear
		
		
		const schoolYearAlreadyExist = await tx.anoLetivo.findFirst({
			where:{
				data_inicio
			}
		});

		if(schoolYearAlreadyExist){
			return {
				"message":"Escola já cadastrada",
				"data":schoolYearAlreadyExist
			}
		}

		const schoolYear = await tx.anoLetivo.create({
			data:{
				data_inicio,
				data_finalizacao
			}
		});

		return {
			"message":"Escola cadastrada com socesso",
			"data":schoolYear
		}
	}
}
export default new CreateSchoolYearModel()