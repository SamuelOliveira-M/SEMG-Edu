import express  from "express";
import TransetionSchoolClassController from "../useCase/turma/transetion/TransetionSchoolClassController";
import CreateSubjectsController from "../useCase/disciplina/create/CreateSubjectsController";
import TransetionSchoolController from "../useCase/escola/transetion/TransetionSchoolController";
import CreateTeacherController from "../useCase/professor/create/CreateTeacherController";

const schoolRoutes = express.Router();

schoolRoutes.use("/escola",TransetionSchoolController.transetionSchool)
schoolRoutes.post("/turma/:cod_inep",TransetionSchoolClassController.transetionSchoolClass)
schoolRoutes.post("/disciplina",CreateSubjectsController.createSubjectsController)
schoolRoutes.post("/professor",CreateTeacherController.createTeacherController)

export default schoolRoutes;
