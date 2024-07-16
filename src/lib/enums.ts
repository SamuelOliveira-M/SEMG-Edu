
export enum DiaSemana {
  segunda = 1,
  terça = 2,
  quarta = 3,
  quinta = 4,
  sexta = 5,
  sabado = 6,
  domingo = 7
}

interface AssessmentData {
  [key: string]: {
    mes?: number;
    tipo?: string;
    semestre?: number;
  };
}

export const assessmentData: AssessmentData = {  
  'MAR': {mes: 3, tipo: "normal", semestre: 1},
  'ABR': {mes: 4, tipo: "normal", semestre: 1},
  'MAI': {mes: 5, tipo: "normal", semestre: 1},
  'JUN': {mes: 6, tipo: "normal", semestre: 1},
  '1ºRS': {mes: 7, tipo: "1 recuperacao", semestre: 1},
  'AGO': {mes: 8, tipo: "normal", semestre: 2},
  'SET': {mes: 9, tipo: "normal", semestre: 2},
  'OUT': {mes: 10, tipo: "normal", semestre: 2},
  'NOV': {mes: 11, tipo: "normal", semestre: 2},
  '2ºRS': {mes: 12, tipo: "2 recuperacao", semestre: 2},
  'PF': {mes: 13, tipo: "final", semestre: 2},  
}