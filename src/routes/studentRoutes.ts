import express  from "express";
import CreateAlunoController from "../useCase/aluno/create/CreateAlunoController";
import cpfValidationMiddleware from "../middlewares/cpfValidationMiddleware";

const studentRoutes = express.Router();

studentRoutes.post("/aluno",CreateAlunoController.createAlunoController)


export default studentRoutes;
