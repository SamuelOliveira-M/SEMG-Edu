import express  from "express";
import TransetionSchoolClassController from "../useCase/turma/transetion/TransetionSchoolClassController";
import CreateSubjectsController from "../useCase/disciplina/create/CreateSubjectController";
import TransetionSchoolController from "../useCase/escola/transetion/TransetionSchoolController";
import CreateTeacherController from "../useCase/professor/create/CreateTeacherController";
import CreateGradeController from "../useCase/notas/create/CreateGradeController";
import CreateManagerController from "../useCase/gestor/create/CreateManagerController";
import CreateCalendarController from "../useCase/horario/create/CreateCalendarController";

import AddSubjectToTeacherController from "../useCase/allocation/allocationOfTeacher/create/AllocationOfTeacherController";

import ReadTeacherController from "../useCase/professor/read/ReadTeacherController";
import ReadManagerController from "../useCase/gestor/read/ReadManagerController";
import ReadSchoolClassController from "../useCase/turma/read/ReadSchoolClassController";
import RemoveSubjectFromTeacherController from "../useCase/professor/delete/RemoveSubjectFromTeacherController";
import ReadAllocationOfTeacherController from "../useCase/allocation/allocationOfTeacher/read/ReadAllocationOfTeacherController";

import { uploadImage } from "../middlewares/uploadToFirebaseStorage";
import Multer from 'multer'


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
schoolRoutes.post("/login",ReadTeacherController.loginTeacher)
schoolRoutes.post("/assigning/subject/teacher",AddSubjectToTeacherController.AddSubjectToTeacher)
schoolRoutes.post("/calendar",CreateCalendarController.createCalendarModel)

schoolRoutes.get("/teacherstt",ReadTeacherController.readAllTeachersController)
schoolRoutes.get("/teacherProfile/:id",ReadTeacherController.readTeachersClasses)

schoolRoutes.get("/gestor",ReadManagerController.readManagerController)
schoolRoutes.get("/class",ReadSchoolClassController.readSchoolClass)
schoolRoutes.get("/class/:id",ReadSchoolClassController.readSchoolClassFindFirst)
schoolRoutes.get("/t/:id",ReadAllocationOfTeacherController.ReadAllocationOfTeacher)
schoolRoutes.get("/tumasdoprofessorrr/:id",ReadSchoolClassController.ReadTeacherClasses)

schoolRoutes.delete("/remove/disciplina",RemoveSubjectFromTeacherController.removeSubjectFromTeacher)

export default schoolRoutes;
