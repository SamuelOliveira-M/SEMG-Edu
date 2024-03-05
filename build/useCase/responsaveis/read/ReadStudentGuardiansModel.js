"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../../../lib/prisma");
class ReadStudentGuardiansModel {
    async readStudentGuardians(nome_pai, nome_mae) {
        const studentGuardiansAlreadyExists = await prisma_1.prisma.responsavel.findFirst({
            where: {
                nome_pai: {
                    equals: nome_pai,
                },
                nome_mae: {
                    equals: nome_mae,
                },
            },
        });
        return studentGuardiansAlreadyExists;
    }
}
exports.default = new ReadStudentGuardiansModel();
