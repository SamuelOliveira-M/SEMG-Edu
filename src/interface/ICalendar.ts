
interface ICalendar {
  diaSemana:string
  horarioId:string
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
