"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../../../lib/prisma");
const CreateSchoolYearModel_1 = __importDefault(require("../../anoLetivo/create/CreateSchoolYearModel"));
const CreateSchoolClassModel_1 = __importDefault(require("../create/CreateSchoolClassModel"));
class TransetionSchoolClassModel {
    async TransetionSchoolClassModel(dataSchooYear, dataSchoolClass, cod_inep) {
        const schoolClassCreationTransaction = await prisma_1.prisma.$transaction(async (tx) => {
            const SchoolAlreadyExist = await prisma_1.prisma.escola.findFirst({
                where: {
                    cod_inep
                }
            });
            if (!SchoolAlreadyExist) {
                return "Escola não existe";
            }
            const schoolYear = await CreateSchoolYearModel_1.default.createSchoolYearModel(dataSchooYear, tx);
            const ano = schoolYear.data.data_inicio.getFullYear();
            const nomeTurma = `${dataSchoolClass.serie}º ano ${dataSchoolClass.nome} - ${dataSchoolClass.turno} - ${ano}`;
            dataSchoolClass.escolaId = SchoolAlreadyExist.id;
            dataSchoolClass.ano_letivoId = schoolYear.data.id;
            dataSchoolClass.nome = nomeTurma;
            const schoolClass = await CreateSchoolClassModel_1.default.schoolClassModel(dataSchoolClass, tx);
            return {
                schoolYear,
                schoolClass
            };
        });
        return schoolClassCreationTransaction;
    }
}
exports.default = new TransetionSchoolClassModel();
