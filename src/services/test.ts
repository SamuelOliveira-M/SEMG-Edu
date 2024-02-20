interface Avaliacao {
	id: string;
	tipo: string;
	nota: number;
	mes: number|null;
	semestre: number;
}

interface Curso {
	id: string;
	nome: string;
	carga_horaria: number;
	avaliacao: Avaliacao[];
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
  media: number;
	provaFinal: number;
	[key: string]: number|string;
}


export function criarEstruturaDados(dadosApi: Curso[]){
	if (dadosApi.length === 0) {
		console.error("Dados da API vazios.");
		return null;
	}

	const list:NotasMateria[] = []

	dadosApi.map((disciplina)=>{
		let notas: NotasMateria = {
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

		disciplina.avaliacao.map((avaliacao)=>{
			if(avaliacao.semestre==1){
				if(avaliacao.mes!==null){
					const mes = obterNomeMes(avaliacao.mes)
					notas[mes] = avaliacao.nota
				}else{
					notas.recup1 = avaliacao.nota
				}	
			}
			else{
				if(avaliacao.mes!==null){
					const mes = obterNomeMes(avaliacao.mes)
					notas[mes] = avaliacao.nota
				}
				if(avaliacao.tipo ==="final"){
					notas.provaFinal = avaliacao.nota
				}
				notas.recup2 = avaliacao.nota
			}
		})
		list.push(notas)
	})
	return list
}

function obterNomeMes(numeroMes:number) {
  if(numeroMes===null){
		return 'recup'
	}
	const data = new Date();
  data.setMonth(numeroMes - 1);
  return data.toLocaleString('pt-BR', { month: 'long' }); 
}
