import ISchollClass from "../../../interface/ISchoolClass";
import ReadSchoolClassModel from "../read/ReadSchoolClassModel";

class CreateSchoolClassModel{
	async schoolClassModel(dataSchooClass:ISchollClass,tx:any){
		const {nome,serie,turno,escolaId,ano_letivoId} = dataSchooClass

		const schoolClassAlreadyExist = await ReadSchoolClassModel.readSchoolClass(
			nome,
			escolaId,
			ano_letivoId
		)


		if(schoolClassAlreadyExist){
			return {
				"message":"Turma já cadastrada",
				"data":schoolClassAlreadyExist
			}
		}

		const schoolclass = await tx.turma.create({
			data:{
				nome,
				serie,
				turno,
				escolaId,
				ano_letivoId
			}
		});

		return {
			"message":"Turma cadastrada com socesso",
			"data":schoolclass
		}
	}

}
export default new CreateSchoolClassModel() 