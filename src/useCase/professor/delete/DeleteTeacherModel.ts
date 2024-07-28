import { prisma } from "../../../lib/prisma";
import ITeacher from "../../../interface/ITeacher";
import { hash } from "bcryptjs";
import ReadTeacherModel from "../read/ReadTeacherModel";
import IResponse from "../../../interface/IResponse";


class DeleteTeacherModel{
	async deleteTeacherModel(teacherId:string):Promise<IResponse> {
		const teacherAlreadyExists = await prisma.professor.findUnique({
			where:{
				id:teacherId
			}
		})

		if (!teacherAlreadyExists) {
			return {
				error:true,
				message:"Professor não encontrado",
			}
		}
		
		const teacher = await prisma.professor.delete({
			where:{
				id:teacherId
			}
		})
		
		return {	
			error:false,
			message:'Professor foi deletado',
			data:teacher
		}
	}
}

export default new DeleteTeacherModel()