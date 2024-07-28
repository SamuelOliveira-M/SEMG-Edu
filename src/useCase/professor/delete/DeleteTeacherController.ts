import { Request,Response } from "express"
import DeleteTeacherModel from "./DeleteTeacherModel"


class DeleteTeacherController{
	async deleteTeacherController(req:Request,res:Response){
		
		const professorId:string = req.params.id
		try{
		
			const teacher = await DeleteTeacherModel.deleteTeacherModel(professorId) 
			
			if(teacher.error){
				return res.status(300).json(teacher)
			}

			return res.status(200).json(teacher)

		}catch(e){

			return res.status(500).json({
				"error":true,
				"message":"Erro desconhecido"
			})
		}
	}
}

export default new DeleteTeacherController()