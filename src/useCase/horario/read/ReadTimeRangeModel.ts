import { prisma } from "../../../lib/prisma"

class ReadTimeRangeModel{

	async readTimeRangeModel(){
		const TimeRange = await prisma.horario.findMany({})
		return TimeRange
	}
}

export default new ReadTimeRangeModel