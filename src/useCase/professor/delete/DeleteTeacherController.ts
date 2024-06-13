import { Request,Response } from "express"
import DeleteTeacherModel from "./DeleteTeacherModel"


class DeleteTeacherController{
	async deleteTeacherController(req:Request,res:Response){
		console.log('ds')
		const professorId:string = req.params.id
		console.log(professorId)
		try{

			const teacher = await DeleteTeacherModel.deleteTeacherModel(professorId) 
			
			if(teacher.erro){
				return res.status(400).json(teacher.message)
			}

			return res.status(200).json(teacher.data)

		}catch(e){
			console.log(e)
			return res.json({
				"error":true,
				"message":"Erro desconhecido"
			})
		}
	}
}

export default new DeleteTeacherController()