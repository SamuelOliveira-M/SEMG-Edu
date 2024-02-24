import express  from "express";
import TransetionSchoolClassController from "../useCase/turma/transetion/TransetionSchoolClassController";
import CreateSubjectsController from "../useCase/disciplina/create/CreateSubjectController";
import TransetionSchoolController from "../useCase/escola/transetion/TransetionSchoolController";
import CreateTeacherController from "../useCase/professor/create/CreateTeacherController";
import CreateGradeController from "../useCase/notas/create/CreateGradeController";
import CreateManagerController from "../useCase/gestor/create/CreateManagerController";

import AddSubjectToTeacherController from "../useCase/professor/update/AddSubjectToTeacherController";

import ReadTeacherController from "../useCase/professor/read/ReadTeacherController";
import ReadManagerController from "../useCase/gestor/read/ReadManagerController";
import ReadSchoolClassController from "../useCase/turma/read/ReadSchoolClassController";
import RemoveSubjectFromTeacherController from "../useCase/professor/delete/RemoveSubjectFromTeacherController";

const schoolRoutes = express.Router();

schoolRoutes.post("/escola",TransetionSchoolController.transetionSchool)
schoolRoutes.post("/turma/:cod_inep",TransetionSchoolClassController.transetionSchoolClass)
schoolRoutes.post("/disciplina",CreateSubjectsController.createSubjectsController)
schoolRoutes.post("/professor",CreateTeacherController.createTeacherController)
schoolRoutes.post("/nota/:registrationId",CreateGradeController.CreateGradeController)
schoolRoutes.post("/gestor",CreateManagerController.createTeacherController)
schoolRoutes.post("/login",CreateManagerController.createTeacherController)
schoolRoutes.post("/assigning/subject/teacher",AddSubjectToTeacherController.AddSubjectToTeacher)

schoolRoutes.get("/teachers",ReadTeacherController.readAllTeachersController)
schoolRoutes.get("/teacherProfile",ReadTeacherController.readTeachersClasses)
schoolRoutes.get("/gestor",ReadManagerController.readManagerController)
schoolRoutes.get("/class",ReadSchoolClassController.readSchoolClass)
schoolRoutes.get("/class/:id",ReadSchoolClassController.readSchoolClassFindFirst)

schoolRoutes.delete("/remove/disciplina",RemoveSubjectFromTeacherController.removeSubjectFromTeacher)

export default schoolRoutes;
