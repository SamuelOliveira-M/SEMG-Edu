import ICalendar from "../../../interface/ICalendar"
import { prisma } from "../../../lib/prisma"

class ReadCalendarModel{
	async readCalendarModel(){

		const calendar = await prisma.calendario.findMany({})
		return calendar
	}
}

export default new ReadCalendarModel()