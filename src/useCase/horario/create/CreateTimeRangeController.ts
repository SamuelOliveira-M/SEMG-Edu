import { Request,Response } from "express"
import Validator from "../../../services/Validator"
import IHorario from "../../../interface/ITimeRange"
import { stringToDateConverter } from "../../../services/converter"
import CreateTimeRangeModel from "./CreateTimeRangeModel"

class CreateTimeRangeController{
	async createTimeRange(req:Request,res:Response){
		
		try{
			
			const dataTimeRange:IHorario = req.body
			
			const validatorTimeRange = Validator.TimeRangeValidator(dataTimeRange)
			console.log(validatorTimeRange)

			if(validatorTimeRange){
			 	return res.status(500).json(validatorTimeRange)
			}

			if(
				stringToDateConverter(dataTimeRange.horarioInicio) >=
				stringToDateConverter(dataTimeRange.horarioFim)
			){
				return "Horário Invalido, O horário de inicio precisa ser maior que Horário de fim "
			}
			
			const TimeRange = await CreateTimeRangeModel.CreateTimeRangeModel(dataTimeRange)
			
			res.json(TimeRange)

		}catch(e){
			console.log(e)
		}
	}
}

export default new CreateTimeRangeController