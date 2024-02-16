interface IGrade{
	id: string
  tipo:'normal' | 'recuperacao' | 'final';
  nota: number
  mes: number
  semestre:number
  anoLetivo: Date      
  disciplina: string
  matriculaId: string
}


export default IGrade