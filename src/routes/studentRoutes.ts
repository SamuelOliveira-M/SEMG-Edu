import express  from "express";
import CreateAlunoController from "../useCase/aluno/create/CreateAlunoController";
import TransectionStudentController from "../useCase/aluno/transation/TransectionStudentController";

const studentRoutes = express.Router();


studentRoutes.post("/aluno",TransectionStudentController.studentCreationTransaction)


export default studentRoutes;
