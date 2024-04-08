interface ICalendar {
  diaSemana:string
  horarioInicio:string
  horarioFim:string
  lotacaoId:string
}

export default ICalendar

interface ICalendarRead {
	calendarId: string
  diaSemana:string
  horarioInicio:string
  horariofim:string
  professor:string
  disciplina:string
  turma:string
}
