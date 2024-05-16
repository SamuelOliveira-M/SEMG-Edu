import IGrade from "../../../interface/IGrade";
import ISubject from "../../../interface/ISubject"
import { prisma } from "../../../lib/prisma"


class ReadSubjectModel{
	async readSubject(nome:string){
		
		const subjectAlreadyExists= await prisma.disciplina.findFirst({
			where: {
				nome: nome,
			}
		});

		return subjectAlreadyExists
		
	}

	async gradesBySubjectModel(matriculaId:string){
		
		const disciplinasComNotas = await prisma.disciplina.findMany({
      include: {
        avaliacao: {
          where: {
            matriculaId,
          },
          select: {
            id: true,
            tipo: true,
            nota: true,
            mes: true,
            semestre: true,
          },
        },
      },
    });

		return disciplinasComNotas

	}

  async classTeacherSubjects(turmaId:string,professorId:string){

    const subjects = await prisma.lotacao.findMany({
      where:{
        professorId,
        turmaId
      },
      select:{
        disciplina:true
      }
    })

    return subjects
  }
}
export default new ReadSubjectModel()