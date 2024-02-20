interface DisciplinaComNotas {
  id: string;
  nome: string;
  carga_horaria: number;
  avaliacao: Avaliacao[];
}

interface Avaliacao {
  id: string;
  tipo: string;
  nota: number;
  mes: number | null;
  semestre: number;
}

interface NotasMateria {
  materia: string;
  marco: number;
  abril: number;
  maio: number;
  junho: number;
  recup1: number;
  agosto: number;
  setembro: number;
  outubro: number;
  novembro: number;
  recup2: number;
  provaFinal: number;
  media: number;
}

export function transformarParaNotasMateria(disciplinas: DisciplinaComNotas[]): NotasMateria[] {
  const lista = []

  return disciplinas.map(disciplina => {
  
    let notas: Partial<NotasMateria> = {
      "materia": disciplina.nome,
      "marco": 0,
      "abril": 0,
      "maio": 0,
      "junho": 0,
      "recup1": 0,
      "agosto": 0,
      "setembro": 0,
      "outubro": 0,
      "novembro": 0,
      "recup2": 0,
      "provaFinal": 0,
      "media": 0
    };

    if (disciplina.avaliacao) {
      disciplina.avaliacao.forEach(avaliacao => {
        for (const chave in notas) {
          if (avaliacao.mes !== null) {
            if (chave === obterNomeMes(avaliacao.mes)) {
              notas[chave] = avaliacao.nota; // Correção aqui
              break; // Se encontrou a chave, não precisa continuar o loop
            }
          }
        }
    
        const mes = avaliacao.mes !== null ? avaliacao.mes : 'recup1';
        console.log(avaliacao);
      });
    }  

    return notas as NotasMateria;
  });
}

// Função auxiliar para calcular a média
function calcularMedia(notas: number[]): number {
  const soma = notas.reduce((acc, nota) => acc + nota, 0);
  return notas.length > 0 ? soma / notas.length : 0;
}





function obterNomeMes(numeroMes:number) {
  const data = new Date();
  data.setMonth(numeroMes - 1); // Os meses no objeto Date são baseados em zero (janeiro é 0)
  return data.toLocaleString('pt-BR', { month: 'long' }); // 'long' retorna o nome completo do mês
}