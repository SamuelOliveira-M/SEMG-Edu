"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../../../lib/prisma");
class ReadSchoolYearModel {
    async readSchoolYear(data_inicio) {
        const year = data_inicio.getFullYear();
        const schoolYearAlreadyExist = await prisma_1.prisma.anoLetivo.findFirst({
            where: {
                data_inicio: {
                    gte: new Date(`${year}-01-01T00:00:00Z`), // Início do ano
                    lt: new Date(`${year + 1}-01-01T00:00:00Z`), // Início do próximo ano
                },
            },
        });
        console.log(schoolYearAlreadyExist);
        return schoolYearAlreadyExist;
    }
}
exports.default = new ReadSchoolYearModel();
