import express  from "express";
import TransetionSchoolController from "../useCase/escola/transetion/TransetionSchoolController";


const escolaRoutes = express.Router();

escolaRoutes.use("/escola",TransetionSchoolController.transetionSchool)


export default escolaRoutes;
