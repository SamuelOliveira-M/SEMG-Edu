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

  async studentPerformanceSheetModel(turmaId:string,professorId:string,disciplinaId:string){
    
    const performanceSheet = await prisma.lotacao.findMany({
      where:{
        professorId,
        turmaId,
        disciplinaId
      },
      select:{
        turma:{
          select:{
            matriculas:{
              select:{
                aluno:{  
                  select:{
                    id:true,
                    nome:true,
                  }
                },
                avaliacao:{
                  select:{
                    id:true,
                    nota:true,
                    semestre:true,
                    mes:true
                  }
                }
      
              }
            }
          }
        }
      }
    })

    return performanceSheet
  }
}
export default new ReadSubjectModel()