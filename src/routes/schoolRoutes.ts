import express  from "express";
import TransetionSchoolClassController from "../useCase/turma/transetion/TransetionSchoolClassController";
import CreateSubjectsController from "../useCase/disciplina/create/CreateSubjectsController";
import TransetionSchoolController from "../useCase/escola/transetion/TransetionSchoolController";
import CreateTeacherController from "../useCase/professor/create/CreateTeacherController";
import CreateGradeController from "../useCase/notas/create/CreateGradeController";

const schoolRoutes = express.Router();

schoolRoutes.post("/escola",TransetionSchoolController.transetionSchool)
schoolRoutes.post("/turma/:cod_inep",TransetionSchoolClassController.transetionSchoolClass)
schoolRoutes.post("/disciplina",CreateSubjectsController.createSubjectsController)
schoolRoutes.post("/professor",CreateTeacherController.createTeacherController)
schoolRoutes.post("/nota",CreateGradeController.CreateGradeController)

export default schoolRoutes;
