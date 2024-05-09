import { Request,Response } from "express"
import ReadCalendarModel from "./ReadCalendarModel"

class ReadCalendarController{
	async readCalendarController(req:Request,res:Response){
		
		const turmaId = req.params.turmaId

		const calendar = await ReadCalendarModel.readCalendarModel(turmaId)

		res.json(calendar)
	}

}

export default new ReadCalendarController