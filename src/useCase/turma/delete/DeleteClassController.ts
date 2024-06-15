import { Request,Response } from "express"
import DeleteClassModel from "./DeleteClassModel"

class DeleteClassController {
	async deleteclass(req:Request,res:Response){
		const {classId} = req.params

		try{

			const teacherDelete = await DeleteClassModel.deleteClassModel(classId)

			if(teacherDelete.error){
				return res.status(400).json(teacherDelete.message)
			}

			return res.status(200).json(teacherDelete.data)
			
		}catch(e){
			console.log(e)
			return res.status(500).json('Erro Desconhecido')
		}
	}
}

export default new DeleteClassController()