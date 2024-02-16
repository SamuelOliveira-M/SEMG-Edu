
interface avaliacao{
	id: string;
	tipo: string;
	nota: number;
	mes: number | null;
	semestre: number;
}

export function ordenarAvaliacoes(avaliacoes: avaliacao[]) {
	return avaliacoes.sort((a, b) => {
			if (a.semestre !== b.semestre) {
					return a.semestre - b.semestre;
			} else if (a.mes !== null && b.mes !== null && a.mes !== b.mes) {
					return a.mes - b.mes;
			} else {
					const ordemTipos: { [tipo: string]: number } = {
							'normal': 1,
							'recuperacao': 2,
							'final': 3,
					};
					return ordemTipos[a.tipo] - ordemTipos[b.tipo];
			}
	});
}