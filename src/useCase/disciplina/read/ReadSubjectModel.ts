import { prisma } from "../../../lib/prisma"
import { addMissingNotas } from "../../../services/organizingDataStructures";
import { addMissingNotas2 } from "../../../services/organizingStudentPerformanceSheet";
import { PerformanceSheet,studentPerformanceSheet,test } from "../../../interface/IPerformanceSheet";

class ReadSubjectModel{
	async readSubject(disciplinaId:string){
		
		const subjectAlreadyExists= await prisma.disciplina.findFirst({
			where: {
				id: disciplinaId,
			}
		});

		return subjectAlreadyExists
		
	}

  async readAllSubjectModel(){
		
		const subjects = await prisma.disciplina.findMany();
    return subjects 
	}

	async gradesBySubjectModel(matriculaId:string){
		const totalMeses = 13; // Número total de meses que deseja considerar
  
    const studentPerformanceSheet:studentPerformanceSheet[] = await prisma.disciplina.findMany({
      select:{
        id:true,
        nome:true,

        avaliacao: {
          orderBy: {
            mes: 'asc',
          },

        where:{
          matriculaId:matriculaId
        },
        
        select: {
          id: true,
          nota: true,
          mes: true,
          semestre: true,
          },
        },
      }
    }) as studentPerformanceSheet[];
    
    const processedData: test = {
      redimento: addMissingNotas2(studentPerformanceSheet, totalMeses),
    };

    
    return processedData;
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

  async studentPerformanceSheetModel(turmaId:string,disciplinaId:string){
    
    
    
    const totalMeses = 13; // Número total de meses que deseja considerar
    
    const performanceSheet: PerformanceSheet = await prisma.turma.findUnique({
      where: {
        id: turmaId,
      },
      select: {
        matriculas: {
          select: {
            id:true,
            aluno: {
              select: {
                id: true,
                nome: true,
              },
            },
            avaliacao: {
              where: {
                disciplinaId: disciplinaId,
              },
              orderBy: {
                mes: 'asc',
              },
              select: {
                id: true,
                nota: true,
                mes: true,
                semestre: true,
              },
            },
          },
        },
      },
    }) as PerformanceSheet;
    
    const processedData: PerformanceSheet = {
      matriculas: addMissingNotas(performanceSheet.matriculas, totalMeses),
    };
    
    return processedData;
  }    
}
export default new ReadSubjectModel()