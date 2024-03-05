"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../../../lib/prisma");
const ReadSubjectModel_1 = __importDefault(require("../../disciplina/read/ReadSubjectModel"));
const ReadGradeModel_1 = __importDefault(require("../read/ReadGradeModel"));
const ReadSchoolYearModel_1 = __importDefault(require("../../anoLetivo/read/ReadSchoolYearModel"));
class CreateGradeModel {
    async createGradeModel(dataGrade) {
        const { tipo, nota, mes, semestre, disciplina, matriculaId, anoLetivo } = dataGrade;
        const subjectAlreadyExist = await ReadSubjectModel_1.default.readSubject(disciplina);
        if (!subjectAlreadyExist) {
            return ({
                "erro": true,
                "message": "Disciplina inlida, não existe essa disciplina no sistema"
            });
        }
        const schoolYearAlreadyExist = await ReadSchoolYearModel_1.default.readSchoolYear(anoLetivo);
        if (!schoolYearAlreadyExist) {
            return {
                "message": "Ano letivo não existe",
                "data": schoolYearAlreadyExist
            };
        }
        const gradeAlreadyExists = await ReadGradeModel_1.default.readGrade(dataGrade, subjectAlreadyExist.id, matriculaId);
        if (gradeAlreadyExists) {
            return {
                "message": "Nota já existe",
                "data": gradeAlreadyExists
            };
        }
        const grade = await prisma_1.prisma.avaliacao.create({
            data: {
                tipo,
                nota,
                mes,
                semestre,
                anoLetivoId: schoolYearAlreadyExist.id,
                disciplinaId: subjectAlreadyExist.id,
                matriculaId
            }
        });
        return {
            "message": "Matricula criado com sucesso",
            "data": grade
        };
    }
}
exports.default = new CreateGradeModel();
