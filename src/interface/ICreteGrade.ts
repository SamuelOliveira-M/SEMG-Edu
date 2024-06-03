interface ICreteGrade{
	disciplinaId:string,
	anoLetivo:number,
	avaliacao:{	
		[key: string]:{
			matricula:string,
			header:string,
			nota:number
		}
	}	
}

export default ICreteGrade
