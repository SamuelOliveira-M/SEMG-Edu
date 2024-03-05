"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../../../lib/prisma");
class ReadRegistrationModel {
    async readRegistration(registrationId) {
        const matriculas = await prisma_1.prisma.matricula.findFirst({
            where: {
                id: registrationId,
            },
            include: {
                aluno: {
                    include: {
                        responsavel: true,
                        address: true
                    },
                },
                turma: {
                    include: {
                        ano_letivo: true
                    }
                },
            }
        });
        return matriculas;
    }
    async readclassRegistration(turmaId) {
        const matriculas = await prisma_1.prisma.matricula.findMany({
            where: {
                turmaId: turmaId
            },
            include: {
                aluno: true
            }
        });
        return matriculas;
    }
    async readclassRegistrationNotes(turmaId) {
        const matriculas = await prisma_1.prisma.matricula.findMany({
            where: {
                turmaId: turmaId
            },
            include: {
                avaliacao: {
                    include: {
                        disciplina: true
                    }
                }
            }
        });
        return matriculas;
    }
}
exports.default = new ReadRegistrationModel();
