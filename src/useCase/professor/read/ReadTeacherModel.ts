import { prisma } from "../../../lib/prisma"


class ReadTeacherModel{
	async readTeacherModel(email:string){
		
		const teacherAlreadyExists= await prisma.professor.findUnique({
			where: {
				email: email,
			},
			include: {
        disciplinas: {}
      },
		});

		return teacherAlreadyExists
	}
}

export default new ReadTeacherModel()