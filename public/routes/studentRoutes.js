"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const TransectionStudentController_1 = __importDefault(require("../useCase/aluno/transation/TransectionStudentController"));
const CreateRegistrationController_1 = __importDefault(require("../useCase/matricula/create/CreateRegistrationController"));
const ReadRegistrationController_1 = __importDefault(require("../useCase/matricula/read/ReadRegistrationController"));
const ReadSubjectOfGradeController_1 = __importDefault(require("../useCase/disciplina/read/ReadSubjectOfGradeController"));
const uploadToFirebaseStorage_1 = require("../middlewares/uploadToFirebaseStorage");
const multer_1 = __importDefault(require("multer"));
const multer = (0, multer_1.default)({
    storage: multer_1.default.memoryStorage(),
});
const studentRoutes = express_1.default.Router();
studentRoutes.post("/aluno", multer.single('file'), uploadToFirebaseStorage_1.uploadImage, TransectionStudentController_1.default.studentCreationTransaction);
studentRoutes.post("/matricular", CreateRegistrationController_1.default.createMatriculaController);
studentRoutes.get("/studantee/:classId", ReadRegistrationController_1.default.readMatriculaController);
studentRoutes.get("/profile/:registrationId", ReadRegistrationController_1.default.readRegistrationUniqueController);
studentRoutes.get("/avaliacao/:registrationId", ReadSubjectOfGradeController_1.default.gradesBySubject);
exports.default = studentRoutes;
