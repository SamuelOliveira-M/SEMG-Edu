import express  from "express";

import ReadSubjectController from "../useCase/disciplina/read/ReadSubjectController";
import DeleteTeacherController from "../useCase/professor/delete/DeleteTeacherController";
import ReadTeacherController from "../useCase/professor/read/ReadTeacherController";
import ReadAllocationOfTeacherController from "../useCase/allocation/allocationOfTeacher/read/ReadAllocationOfTeacherController";

const teacherRoutes = express.Router();

teacherRoutes.get('/subjects/:turmaId/:professorId',ReadSubjectController.classTeacherSubjects);
teacherRoutes.get('/redimentoss/:turmaId/:disciplinaId',ReadSubjectController.studentPerformanceSheet)
teacherRoutes.get("/teacherstt",ReadTeacherController.readAllTeachersController)
teacherRoutes.get("/teacherProfile/:id",ReadTeacherController.readTeachersClasses)
teacherRoutes.get("/teachers-subjects/:id",ReadAllocationOfTeacherController.ReadAllocationOfTeacher)

teacherRoutes.delete("/remove/teacher/:id",DeleteTeacherController.deleteTeacherController)

export default teacherRoutes;
