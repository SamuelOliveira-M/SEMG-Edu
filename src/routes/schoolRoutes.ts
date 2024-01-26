import express  from "express";
import TransetionSchoolClassController from "../useCase/turma/transetion/TransetionSchoolClassController";
import CreateSubjectsController from "../useCase/disciplina/create/CreateSubjectController";
import TransetionSchoolController from "../useCase/escola/transetion/TransetionSchoolController";
import CreateTeacherController from "../useCase/professor/create/CreateTeacherController";
import CreateGradeController from "../useCase/notas/create/CreateGradeController";

import CreateManagerController from "../useCase/gestor/create/CreateManagerController";
import ReadTeacherController from "../useCase/professor/read/ReadTeacherController";
import ReadManagerController from "../useCase/gestor/read/ReadManagerController";
import ReadSchoolClassController from "../useCase/turma/read/ReadSchoolClassController";

const schoolRoutes = express.Router();

schoolRoutes.post("/escola",TransetionSchoolController.transetionSchool)
schoolRoutes.post("/turma/:cod_inep",TransetionSchoolClassController.transetionSchoolClass)
schoolRoutes.post("/disciplina",CreateSubjectsController.createSubjectsController)
schoolRoutes.post("/professor",CreateTeacherController.createTeacherController)
schoolRoutes.post("/nota",CreateGradeController.CreateGradeController)
schoolRoutes.post("/gestor",CreateManagerController.createTeacherController)

schoolRoutes.post("/professo",ReadTeacherController.readTeacherController)
schoolRoutes.get("/gestor",ReadManagerController.readManagerController)
schoolRoutes.get("/class",ReadSchoolClassController.readSchoolClass)

export default schoolRoutes;
