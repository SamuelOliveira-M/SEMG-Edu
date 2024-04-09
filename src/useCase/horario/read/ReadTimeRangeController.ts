import { Request,Response } from "express"
import ReadTimeRangeModel from "./ReadTimeRangeModel"

class ReadTimeRangeController{
	async readTimeRangeController(req:Request,res:Response){
		try{
			const TimeRange = await ReadTimeRangeModel.readTimeRangeModel()

			res.status(200).json(TimeRange)

		}catch(e){
			console.log(e)
			res.status(500)
		}
	}
}

export default new ReadTimeRangeController