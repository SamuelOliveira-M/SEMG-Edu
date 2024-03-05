"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../../../lib/prisma");
class ReadManagerModel {
    async readManager(email) {
        const managerAlreadyExists = await prisma_1.prisma.gestor.findUnique({
            where: {
                email: email,
            }
        });
        return managerAlreadyExists;
    }
}
exports.default = new ReadManagerModel();
