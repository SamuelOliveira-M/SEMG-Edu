import express  from "express";

import ReadSubjectController from "../useCase/disciplina/read/ReadSubjectController";
import DeleteTeacherController from "../useCase/professor/delete/DeleteTeacherController";


const teacherRoutes = express.Router();

teacherRoutes.get('/subjects/:turmaId/:professorId',ReadSubjectController.classTeacherSubjects);
teacherRoutes.get('/redimentoss/:turmaId/:disciplinaId',ReadSubjectController.studentPerformanceSheet)

teacherRoutes.delete("/remove/teacher/:id",DeleteTeacherController.deleteTeacherController)

export default teacherRoutes;
