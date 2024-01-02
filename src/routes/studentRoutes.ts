import express  from "express";
import CreateAlunoController from "../useCase/aluno/create/CreateAlunoController";
import cpfValidationMiddleware from "../middlewares/cpfValidationMiddleware";

import CreateAddresController from "../useCase/endereco/create/CreateAddresController";
import CreateStudentGuardiansController from "../useCase/responsaveis/create/CreateStudentGuardiansController";
const studentRoutes = express.Router();


studentRoutes.post("/aluno",CreateAlunoController.createAlunoController)


export default studentRoutes;
