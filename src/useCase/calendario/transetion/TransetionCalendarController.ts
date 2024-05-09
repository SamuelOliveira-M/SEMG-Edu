import { Request,Response } from "express"

import TransetionCalendarModel from "./TransetionCalendarModel"
import Validator from "../../../services/Validator"


class TransetionCalendarController{
	async transetionClassCalendar(req:Request,res:Response){
		const {
			weekDay,
			dataHorario,
			className,
			teacherName,
			subjectName 
		
		} = req.body
			

		try {
			const validateWeekDay = Validator.weekDayValidate(weekDay)
			if(validateWeekDay){
				return res.json(validateWeekDay)
			}

			const validatorTimeRange = Validator.timeRangeValidator(dataHorario)			
			if(validatorTimeRange){
				return res.json(validatorTimeRange)
			}

			const validatorAlocationOfTeacher = Validator.alocationOfTeacherValidate(
				className,
				teacherName,
				subjectName
			)
			if(validatorAlocationOfTeacher){
				return res.json(validatorAlocationOfTeacher)
			}
			

			const aula = await TransetionCalendarModel.transetionSchoolModel(
				weekDay,
				dataHorario,
				className,
				teacherName,
				subjectName 
			)

			return res.json(aula)

		}catch(e){
			console.log(e)
			res.status(500).json(e)
		}
		
	}

}

export default new TransetionCalendarController()