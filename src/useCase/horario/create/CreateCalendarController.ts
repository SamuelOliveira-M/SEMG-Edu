import { Request,Response } from "express"
import Validator from "../../../services/Validator"
import CreateCalendarModel from "./CreateCalendarModel"
import ICalendar from "../../../interface/ICalendar"

class CreateCalendarController{
	async createCalendarModel(req:Request,res:Response){
		
		const dataCalendar:ICalendar = req.body
		
		const validatorTeacher = Validator.calendarValidator(dataCalendar)

		if(validatorTeacher){
			return res.json(validatorTeacher)
		}

		const calendar = await CreateCalendarModel.createCalendarModel(dataCalendar)

		res.json(calendar)
	}

}

export default new CreateCalendarController