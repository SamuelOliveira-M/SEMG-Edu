import express  from "express";
import ReadSubjectController from "../useCase/disciplina/read/ReadSubjectController";


const teacherRoutes = express.Router();

teacherRoutes.get('/subjects/:turmaId/:professorId',ReadSubjectController.classTeacherSubjects);
teacherRoutes.get('/redimentoss/:turmaId/:disciplinaId',ReadSubjectController.studentPerformanceSheet)

export default teacherRoutes;
