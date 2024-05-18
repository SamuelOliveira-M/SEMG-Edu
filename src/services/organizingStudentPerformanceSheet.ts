import { studentPerformanceSheet, Avaliacao } from "../interface/IPerformanceSheet";

export const addMissingNotas2 = (matriculas: studentPerformanceSheet[], totalMeses: number): studentPerformanceSheet[] => {
  return matriculas.map(matricula => {
    const avaliacoesMap = new Map<number, Avaliacao>();
    matricula.avaliacao.forEach(avaliacao => {
      avaliacoesMap.set(avaliacao.mes, avaliacao);
    });

    // Adicionar notas zero para meses ausentes
    const avaliacoesCompletas: Avaliacao[] = [];
    for (let mes = 3; mes <= totalMeses; mes++) {
      if (avaliacoesMap.has(mes)) {
        avaliacoesCompletas.push(avaliacoesMap.get(mes)!);
      } else {
        if (mes === 7) {
          avaliacoesCompletas.push({
            id: null,
            nota: 0,
            mes: 7, // Recuperação após junho
            semestre: null,
            tipo:'1 Recuperação'
          });
        }else{
          avaliacoesCompletas.push({
            id: null,
            nota: 0,
            mes: mes,
            semestre: null,
            tipo:null
          });
        }
      }
    }

    // Adicionar notas de recuperação e prova final
    

    if (totalMeses > 10) {
      avaliacoesCompletas.push({
        id: null,
        nota: 0,
        mes: 12, // Recuperação após novembro
        semestre: null,
        tipo:'2 Recuperação'
      });

      avaliacoesCompletas.push({
        id: null,
        nota: 0,
        mes: 13, // Prova final
        semestre: null,
        tipo:'Prova final'
      });
    }

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; // Months are zero-indexed, so add 1 to get the actual month number (1-12)
    
    const notas = avaliacoesCompletas.map(avaliacao => avaliacao.nota);
    
    if(currentMonth<11){
      const media = notas.reduce((sum, nota) => sum + nota, 0) / (currentMonth-1);
      const status: string = media > 6 ? 'Aprovado' : 'Cursando';
      return {
        ...matricula,
        avaliacao: avaliacoesCompletas,
        media,
        status
      };
    }

    const media = notas.reduce((sum, nota) => sum + nota, 0) / currentMonth;
    const status: string = media > 6 ? 'Aprovado' : 'Reprovado';

    return {
      ...matricula,
      avaliacao: avaliacoesCompletas,
      media,
      status
    };
  });
};
