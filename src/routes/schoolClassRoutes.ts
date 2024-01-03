import express  from "express";
import TransetionSchoolClassController from "../useCase/turma/transetion/TransetionSchoolClassController";

const schoolClassRoutes = express.Router();


schoolClassRoutes.post("/turma/:cod_inep",TransetionSchoolClassController.transetionSchoolClass)


export default schoolClassRoutes;
