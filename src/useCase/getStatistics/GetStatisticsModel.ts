import { prisma } from "../../lib/prisma"


class GetStatisticsModel{
	async getStatisticsModel(){
		
		const studantAll = await prisma.aluno.count()
		const teacherAll = await prisma.professor.count()
		const schollClassAll = await prisma.turma.count()
		const enrolledStudents = await prisma.matricula.count()

		const dropout = studantAll-enrolledStudents

		return {studantAll,teacherAll,schollClassAll,dropout}

	}
}

export default new GetStatisticsModel