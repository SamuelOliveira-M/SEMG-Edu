import { prisma } from "../../../lib/prisma"


class ReadTeacherModel{
	async readTeacher(email:string){
		
		const teacherAlreadyExists= await prisma.professor.findUnique({
			where: {
				email: email,
			}
		});

		return teacherAlreadyExists
	}
}

export default new ReadTeacherModel()