import { Avaliacao } from "@prisma/client";

interface ISubjectOfGrade{      
	id: string;
	nome: string;
	carga_horaria: number;
	avaliacao: {
		id: string;
    tipo: 'normal' | 'recuperacao' | 'final';
    nota: number;
    mes: number;
    semestre: number;
	};
}

export default ISubjectOfGrade