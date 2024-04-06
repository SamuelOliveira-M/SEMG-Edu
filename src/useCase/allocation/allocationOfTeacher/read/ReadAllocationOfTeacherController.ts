import { Request,Response } from "express"
import ReadAllocationOfTeacherModel from "./ReadAllocationOfTeacherModel"


class ReadAllocationOfTeacherController{
	async ReadAllocationOfTeacher(req:Request, res:Response){

	const id:string = req.params.id

		try{
			
			const schoolClass = await ReadAllocationOfTeacherModel.AllocationOfTeacherModel(id)
			res.json(schoolClass)

		}catch(e){
			console.log(e)
		}
	}
}

export default new ReadAllocationOfTeacherController