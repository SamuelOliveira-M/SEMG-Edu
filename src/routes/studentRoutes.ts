import express  from "express";
import TransectionStudentController from "../useCase/aluno/transation/TransectionStudentController";
import CreateRegistrationController from "../useCase/matricula/create/CreateRegistrationController"; 
import ReadRegistrationController from "../useCase/matricula/read/ReadRegistrationController";
import ReadGradeController from "../useCase/notas/read/ReadGradeController";
import ReadSubjectOfGradeController from "../useCase/disciplina/read/ReadSubjectOfGradeController";

import { uploadImage } from "../middlewares/uploadToFirebaseStorage";
import Multer from 'multer'


const multer = Multer({
	storage: Multer.memoryStorage(),
});

const studentRoutes = express.Router();


studentRoutes.post("/aluno",multer.single('file'),uploadImage,TransectionStudentController.studentCreationTransaction)
studentRoutes.post("/matricular",CreateRegistrationController.createMatriculaController)

studentRoutes.get("/studante/:classId",ReadRegistrationController.readMatriculaController)
studentRoutes.get("/profile/:registrationId",ReadRegistrationController.readRegistrationUniqueController)
studentRoutes.get("/avaliacao/:registrationId",ReadSubjectOfGradeController.gradesBySubject)

export default studentRoutes;
