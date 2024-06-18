import express  from "express";
import TransectionStudentController from "../useCase/aluno/transation/TransectionStudentController";
import CreateRegistrationController from "../useCase/matricula/create/CreateRegistrationController"; 
import ReadRegistrationController from "../useCase/matricula/read/ReadRegistrationController";
import ReadSubjectOfGradeController from "../useCase/disciplina/read/ReadSubjectOfGradeController";
import ReadStudantController from "../useCase/aluno/read/ReadStudantController";

import { uploadImage } from "../middlewares/uploadToFirebaseStorage";
import Multer from 'multer'


const multer = Multer({
	storage: Multer.memoryStorage(),
});

const studentRoutes = express.Router();


studentRoutes.post("/aluno",multer.single('file'),uploadImage,TransectionStudentController.studentCreationTransaction)
studentRoutes.post("/matricular",CreateRegistrationController.createMatriculaController)

studentRoutes.get("/studantee/:classId",ReadRegistrationController.readMatriculaController)
studentRoutes.get("/profile/:registrationId",ReadRegistrationController.readRegistrationUniqueController)
studentRoutes.get("/avaliacaos/:registrationId",ReadSubjectOfGradeController.gradesBySubject)
studentRoutes.get("/studant/noClasses",ReadStudantController.readNoRegistration)


export default studentRoutes;
