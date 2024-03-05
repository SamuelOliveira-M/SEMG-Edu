"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../../../lib/prisma");
const ReadStudentModel_1 = __importDefault(require("../../aluno/read/ReadStudentModel"));
class CreateRegistrationModel {
    async createMatriculaModel(dataRegistration) {
        const { numero_matricula, status, escola, idTurma, cpf } = dataRegistration;
        const studentAlreadyExists = await ReadStudentModel_1.default.readStudent(cpf);
        if (studentAlreadyExists && studentAlreadyExists.matricula) {
            return {
                "message": "Aluno já possui uma matricula",
                "data": studentAlreadyExists.matricula
            };
        }
        const school = await prisma_1.prisma.escola.findUnique({
            where: {
                cod_inep: escola,
            },
            include: {
                turmas: {
                    where: {
                        id: idTurma,
                    },
                },
            },
        });
        if (school) {
            if (school.turmas && school.turmas.length > 0) {
                if (studentAlreadyExists) {
                    const registration = await prisma_1.prisma.matricula.create({
                        data: {
                            numero_matricula,
                            status,
                            escolaId: school.id,
                            turmaId: school.turmas[0].id,
                            alunoId: studentAlreadyExists.id
                        }
                    });
                    return {
                        "erro": false,
                        "message": "Matricula criado com sucesso",
                        "data": registration
                    };
                }
            }
            else {
                return {
                    "erro": true,
                    "message": "Não existe essa turma"
                };
            }
        }
        else {
            return {
                "erro": true,
                "message": "A Escola não existe no sistema"
            };
        }
    }
}
exports.default = new CreateRegistrationModel();
