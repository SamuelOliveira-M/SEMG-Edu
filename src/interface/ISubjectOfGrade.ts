import { Avaliacao } from "@prisma/client";

interface DisciplinaComNotas {
  id: string
  nome: string
  carga_horaria: number
	avaliacao: Avaliacao[]
} 

export default DisciplinaComNotas