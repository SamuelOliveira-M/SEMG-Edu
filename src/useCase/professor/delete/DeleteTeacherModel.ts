import { prisma } from "../../../lib/prisma";
import ITeacher from "../../../interface/ITeacher";
import { hash } from "bcryptjs";
import ReadTeacherModel from "../read/ReadTeacherModel";


class DeleteTeacherModel{
	async deleteTeacherModel(teacherId:string) {
		
		const teacherAlreadyExists = await prisma.professor.findUnique({
			where:{
				id:teacherId
			}
		})

		if (!teacherAlreadyExists) {
			return {
				"erro":true,
				"message":"Professor não encontrado",
			}
		}
		
		const teacher = await prisma.professor.delete({
			where:{
				id:teacherId
			}
		})
		
		return {	
			"data":teacher
		}
	}
}

export default new DeleteTeacherModel()