import { Request,Response } from "express"
import Validator from "../../../services/Validator"
import CreateCalendarModel from "./CreateCalendarModel"
import ICalendar from "../../../interface/ICalendar"

class CreateCalendarController{
	async createCalendarModel(req:Request,res:Response){
		
		let dataCalendar:ICalendar = req.body
		
		dataCalendar.horarioFim = new Date(dataCalendar.horarioFim)
		dataCalendar.horarioInicio = new Date(dataCalendar.horarioInicio)
		//const validatorTeacher = Validator.calendarValidator(dataCalendar)

		//if(validatorTeacher){
			//return{
			//	"message":"Endereço já existe no sistema",
		//		"data":validatorTeacher
		//	}
//		}

		const calendar = await CreateCalendarModel.createCalendarModel(dataCalendar)

		res.json(calendar)
	}

}

export default new CreateCalendarController