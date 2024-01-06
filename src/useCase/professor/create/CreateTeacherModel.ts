import { prisma } from "../../../lib/prisma";
import ITeacher from "../../../interface/ITeacher";
import { hash } from "bcryptjs";


class CreateTeacherModel{
	async createTeacherModel(dataTeacher:ITeacher) {
		
		const {nome,email,senha} = dataTeacher

		const teacherAlreadyExists= await prisma.professor.findUnique({
			where: {
				id: nome,
			}
		});

		if (teacherAlreadyExists) {
			return {
				"message":"Disciplina já existe no sistema",
				"data":teacherAlreadyExists
			}
		}

		const passwordHash = await hash(senha,8)

		const teacher = await prisma.professor.create({
			data:{
				nome,
				email,
				senha:passwordHash
			}
		})
		
		return {
			"message":"Disciplina criado com sucesso",	
			"data":teacher
		}
	}
}

export default new CreateTeacherModel()