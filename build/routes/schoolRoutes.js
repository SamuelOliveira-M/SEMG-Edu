"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const TransetionSchoolClassController_1 = __importDefault(require("../useCase/turma/transetion/TransetionSchoolClassController"));
const CreateSubjectController_1 = __importDefault(require("../useCase/disciplina/create/CreateSubjectController"));
const TransetionSchoolController_1 = __importDefault(require("../useCase/escola/transetion/TransetionSchoolController"));
const CreateTeacherController_1 = __importDefault(require("../useCase/professor/create/CreateTeacherController"));
const CreateGradeController_1 = __importDefault(require("../useCase/notas/create/CreateGradeController"));
const CreateManagerController_1 = __importDefault(require("../useCase/gestor/create/CreateManagerController"));
const AddSubjectToTeacherController_1 = __importDefault(require("../useCase/professor/update/AddSubjectToTeacherController"));
const ReadTeacherController_1 = __importDefault(require("../useCase/professor/read/ReadTeacherController"));
const ReadManagerController_1 = __importDefault(require("../useCase/gestor/read/ReadManagerController"));
const ReadSchoolClassController_1 = __importDefault(require("../useCase/turma/read/ReadSchoolClassController"));
const RemoveSubjectFromTeacherController_1 = __importDefault(require("../useCase/professor/delete/RemoveSubjectFromTeacherController"));
const uploadToFirebaseStorage_1 = require("../middlewares/uploadToFirebaseStorage");
const multer_1 = __importDefault(require("multer"));
const multer = (0, multer_1.default)({
    storage: multer_1.default.memoryStorage(),
});
const schoolRoutes = express_1.default.Router();
schoolRoutes.post("/escola", TransetionSchoolController_1.default.transetionSchool);
schoolRoutes.post("/turma/:cod_inep", TransetionSchoolClassController_1.default.transetionSchoolClass);
schoolRoutes.post("/disciplina", CreateSubjectController_1.default.createSubjectsController);
schoolRoutes.post("/professor", multer.single('file'), uploadToFirebaseStorage_1.uploadImage, CreateTeacherController_1.default.createTeacherController);
schoolRoutes.post("/nota/:registrationId", CreateGradeController_1.default.CreateGradeController);
schoolRoutes.post("/gestor", CreateManagerController_1.default.createTeacherController);
schoolRoutes.post("/login", CreateManagerController_1.default.createTeacherController);
schoolRoutes.post("/assigning/subject/teacher", AddSubjectToTeacherController_1.default.AddSubjectToTeacher);
schoolRoutes.get("/teacherstt", ReadTeacherController_1.default.readAllTeachersController);
schoolRoutes.get("/teacherProfile", ReadTeacherController_1.default.readTeachersClasses);
schoolRoutes.get("/gestor", ReadManagerController_1.default.readManagerController);
schoolRoutes.get("/class", ReadSchoolClassController_1.default.readSchoolClass);
schoolRoutes.get("/class/:id", ReadSchoolClassController_1.default.readSchoolClassFindFirst);
schoolRoutes.get("/testtt/:id", ReadSchoolClassController_1.default.readSubjectAndTeacherOfClass);
schoolRoutes.delete("/remove/disciplina", RemoveSubjectFromTeacherController_1.default.removeSubjectFromTeacher);
exports.default = schoolRoutes;
