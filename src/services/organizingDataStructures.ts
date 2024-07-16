import { ICalendarRead } from "../interface/ICalendar";
import { Matricula, Avaliacao } from "../interface/IPerformanceSheet";
import { DiaSemana } from "../lib/enums";

export const addMissingNotas = (matriculas: Matricula[], totalMeses: number): Matricula[] => {
  return matriculas.map(matricula => {
    let gradeNum = 0
    
    const avaliacoesMap = new Map<number, Avaliacao>();
    
    matricula.avaliacao.forEach(avaliacao => {
      avaliacoesMap.set(avaliacao.mes, avaliacao);
      gradeNum++
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
        }

        if (mes === 12) {
          avaliacoesCompletas.push({
            id: null,
            nota: 0,
            mes: 12, // Recuperação após novembro
            semestre: null,
            tipo:'2 Recuperação'
          });
        }

        if (mes === 13) {
          avaliacoesCompletas.push({
            id: null,
            nota: 0,
            mes: 13, // Prova final
            semestre: null,
            tipo:'Prova final'
          });
        }
        
        else{
          if(mes!==7 && mes!==12 && mes!==13){
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
    }
    
    const notas = avaliacoesCompletas.map(avaliacao => avaliacao.nota);
    
    if(gradeNum<11){
      const media = notas.reduce((sum, nota) => sum + nota, 0) / (gradeNum);
      const status: string = media > 6 ? 'Aprovado' : 'Cursando';
      return {
        ...matricula,
        avaliacao: avaliacoesCompletas,
        media,
        status
      };
    }

    const media = notas.reduce((sum, nota) => sum + nota, 0) / gradeNum;
    const status: string = media > 6 ? 'Aprovado' : 'Reprovado';

    return {
      ...matricula,
      avaliacao: avaliacoesCompletas,
      media,
      status  
    };
  });
};

export function adicionarAulas(lista: ICalendarRead[]): ICalendarRead[] {
  const diasSemana =['Segunda','Terça','Quarta',"Quinta","Sexta"]
  
  while (lista.length < 5) {
    for(let i = 0; i <= diasSemana.length - 1; i++) {
      if(lista[i]){
        while(lista[i].aulas.length<5){
          lista[i].aulas.push({
            lotacao: {
              professor: {
                id: 'dddsdfs',
                nome: 'Professor'
              },
              disciplina: {
                id: 'id-padrao-disciplina',
                nome: 'Disciplina'
              }
            },
            horario: {
              id: 'id-padrao-horario',
              horarioInicio: '00:00',
              horarioFim: '01:00'
            }
          });
        }
      }
      else{
        lista.push({
          diaSemana: diasSemana[i], // Pega o dia da semana baseado no índice
          aulas: [
            {
              lotacao: {
                professor: {
                  id: 'dddsdfs',
                  nome: 'Professor'
                },
                disciplina: {
                  id: 'id-padrao-disciplina',
                  nome: 'Disciplina'
                }
              },
              horario: {
                id: 'id-padrao-horario',
                horarioInicio: '00:00',
                horarioFim: '01:00'
              }
            },
            {
              lotacao: {
                professor: {
                  id: 'dddsdfs',
                  nome: 'Professor'
                },
                disciplina: {
                  id: 'id-padrao-disciplina',
                  nome: 'Disciplina'
                }
              },
              horario: {
                id: 'id-padrao-horario',
                horarioInicio: '00:00',
                horarioFim: '01:00'
              }
            },
            {
              lotacao: {
                professor: {
                  id: 'dddsdfs',
                  nome: 'Professor'
                },
                disciplina: {
                  id: 'id-padrao-disciplina',
                  nome: 'Disciplina'
                }
              },
              horario: {
                id: 'id-padrao-horario',
                horarioInicio: '00:00',
                horarioFim: '01:00'
              }
            },
            {
              lotacao: {
                professor: {
                  id: 'dddsdfs',
                  nome: 'Professor'
                },
                disciplina: {
                  id: 'id-padrao-disciplina',
                  nome: 'Disciplina'
                }
              },
              horario: {
                id: 'id-padrao-horario',
                horarioInicio: '00:00',
                horarioFim: '01:00'
              }
            },
            {
              lotacao: {
                professor: {
                  id: 'dddsdfs',
                  nome: 'Professor'
                },
                disciplina: {
                  id: 'id-padrao-disciplina',
                  nome: 'Disciplina'
                }
              },
              horario: {
                id: 'id-padrao-horario',
                horarioInicio: '00:00',
                horarioFim: '01:00'
              }
            }
          ]
        });
      }
    }
  }
  return lista;
}