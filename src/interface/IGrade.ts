interface IGrade{
	id: string
  tipo:'normal' | '1 recuperacao' | 'final' | '2 recuperacao'; 
  nota: number
  mes: number
  semestre:number
  anoLetivo: Date      
  disciplina: string
  matriculaId: string
}


export default IGrade