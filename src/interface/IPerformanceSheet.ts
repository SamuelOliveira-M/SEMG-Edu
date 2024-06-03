// types.ts

export interface Aluno {
  id: string;
  nome: string;
}

export interface Avaliacao {
  id: string | null;
  nota: number;
  mes: number ;
  semestre: number | null;
  tipo:string | null
}

export interface Matricula {
  id:string
  aluno: Aluno;
  avaliacao: Avaliacao[];
}

export interface PerformanceSheet {
  matriculas: Matricula[];
}


export interface studentPerformanceSheet{
  id: string,
	nome: string,
	avaliacao:Avaliacao[]
}

export interface test{
  redimento:studentPerformanceSheet[]
}
