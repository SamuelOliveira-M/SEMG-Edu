import { Request,Response } from "express"
import ReadCalendarModel from "./ReadCalendarModel"

class ReadCalendarController{
	async readCalendarController(req:Request,res:Response){
		
		const calendar = await ReadCalendarModel.readCalendarModel()

		res.json(calendar)
	}

}

export default new ReadCalendarController