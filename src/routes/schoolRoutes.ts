import express  from "express";
import TransetionSchoolClassController from "../useCase/turma/transetion/TransetionSchoolClassController";
import CreateSubjectsController from "../useCase/disciplina/create/CreateSubjectController";
import TransetionSchoolController from "../useCase/escola/transetion/TransetionSchoolController";
import CreateTeacherController from "../useCase/professor/create/CreateTeacherController";
import CreateGradeController from "../useCase/notas/create/CreateGradeController";
import CreateManagerController from "../useCase/gestor/create/CreateManagerController";
import CreateCalendarController from "../useCase/calendario/create/CreateCalendarController";
import CreateTimeRangeController from "../useCase/horario/create/CreateTimeRangeController";

import AddSubjectToTeacherController from "../useCase/allocation/allocationOfTeacher/create/AllocationOfTeacherController";

import ReadTeacherController from "../useCase/professor/read/ReadTeacherController";
import ReadManagerController from "../useCase/gestor/read/ReadManagerController";
import ReadSchoolClassController from "../useCase/turma/read/ReadSchoolClassController";
import RemoveSubjectFromTeacherController from "../useCase/professor/delete/RemoveSubjectFromTeacherController";
import ReadAllocationOfTeacherController from "../useCase/allocation/allocationOfTeacher/read/ReadAllocationOfTeacherController";
import ReadGradeController from "../useCase/notas/read/ReadGradeController";
import ReadTimeRangeController from "../useCase/horario/read/ReadTimeRangeController";

import { uploadImage } from "../middlewares/uploadToFirebaseStorage";
import Multer from 'multer'
import ReadCalendarController from "../useCase/calendario/read/ReadCalendarController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import AutenticationController from "../useCase/autentication/AutenticationController";
import GenerateTokenController from "../useCase/refreshtoken/generateToken/GenerateTokenController";
import { get } from "http";
import GetStatisticsController from "../useCase/getStatistics/GetStatisticsController";

import TransetionCalendarController from "../useCase/calendario/transetion/TransetionCalendarController";

const multer = Multer({
	storage: Multer.memoryStorage(),
});

const schoolRoutes = express.Router();

schoolRoutes.post("/escola",TransetionSchoolController.transetionSchool)
schoolRoutes.post("/turma/:cod_inep",TransetionSchoolClassController.transetionSchoolClass)
schoolRoutes.post("/disciplina",CreateSubjectsController.createSubjectsController)
schoolRoutes.post("/professor",multer.single('file'),uploadImage,CreateTeacherController.createTeacherController)
schoolRoutes.post("/nota/:registrationId",CreateGradeController.CreateGradeController)
schoolRoutes.post("/gestor",CreateManagerController.createTeacherController)
schoolRoutes.post("/lotacao",AddSubjectToTeacherController.AddSubjectToTeacher)
schoolRoutes.post("/calendario",TransetionCalendarController.transetionClassCalendar)
schoolRoutes.post("/horario",CreateTimeRangeController.createTimeRange)
schoolRoutes.post("/login",AutenticationController.authenticate)
schoolRoutes.post('/refreshtoken',GenerateTokenController.generateToken)



schoolRoutes.get("/teacherstt",ReadTeacherController.readAllTeachersController)
schoolRoutes.get("/teacherProfile/:id",ReadTeacherController.readTeachersClasses)
schoolRoutes.get("/calendar/:classId",ReadCalendarController.readCalendarController)

schoolRoutes.get("/gestor",ReadManagerController.readManagerController)
schoolRoutes.get("/class",ReadSchoolClassController.readSchoolClass)
schoolRoutes.get("/class/:id",ReadSchoolClassController.readSchoolClassFindFirst)
schoolRoutes.get("/teachers-subjects/:id",ReadAllocationOfTeacherController.ReadAllocationOfTeacher)
schoolRoutes.get("/tumasdoprofessorrr/:id",ReadSchoolClassController.ReadTeacherClasses)

schoolRoutes.get("/horarios",ReadTimeRangeController.readTimeRangeController)

schoolRoutes.get("/getStatistics",GetStatisticsController.getStatistics)

schoolRoutes.delete("/remove/disciplina",RemoveSubjectFromTeacherController.removeSubjectFromTeacher)

export default schoolRoutes;
