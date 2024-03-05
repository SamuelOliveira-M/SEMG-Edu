"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../../../lib/prisma");
class ReadSchoolModel {
    async readSchool(dataSchool) {
        const { cod_inep } = dataSchool;
        const schoolAlreadyExist = await prisma_1.prisma.escola.findFirst({
            where: {
                cod_inep,
            }
        });
        return schoolAlreadyExist;
    }
}
exports.default = new ReadSchoolModel();
