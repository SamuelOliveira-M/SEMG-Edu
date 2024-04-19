import { Request,Response } from "express"
import GetStatisticsModel from "./GetStatisticsModel"

class GetStatisticsController{
	async getStatistics(req:Request,res:Response){

		try{
			const dataStatistics= await GetStatisticsModel.getStatisticsModel()
			res.status(200).json(dataStatistics)

		}catch(e){
			console.log(e)
			res.status(500).json("Erro ao processar os dados, Tente mais Tarde, Por favor!")
		}
	}
}

export default new GetStatisticsController