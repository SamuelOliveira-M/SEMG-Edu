export interface IClassroom{
	lotacaoId: string 
  calendarioId: string
  horarioId: string
}

export interface ICalendarClass {
  lotacao: {
    professor: {
      id: string,
      nome: string
    },
    disciplina: {
      id: string,
      nome: string
    }
  },
  horario: {
    id: string,
    horarioInicio: string,
    horarioFim: string
  }
}

