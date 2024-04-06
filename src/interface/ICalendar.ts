interface ICalendar {
  diaSemana:string
  horarioInicio:Date
  horarioFim:Date
  lotacaoId:string
}

export default ICalendar

interface ICalendarRead {
	calendarId: string
  diaSemana:string
  horarioInicio:Date
  horariofim:Date
  professor:string
  disciplina:string
  turma:string
}
