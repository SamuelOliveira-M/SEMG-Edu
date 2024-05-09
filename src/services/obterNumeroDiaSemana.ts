import { DiaSemana } from "../lib/enums";



export function obterNumeroDiaSemana(dia: string): number|undefined {
  const diaLowerCase:string = dia.toLowerCase();
	const diaEnum = DiaSemana[diaLowerCase as keyof typeof DiaSemana]
	
	if (typeof diaEnum === 'number') { 
    return diaEnum;
  } else {
    return undefined;
  }
}