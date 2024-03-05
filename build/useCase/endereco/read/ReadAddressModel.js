"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../../../lib/prisma");
class ReadAddressModel {
    async readAddress(dataAddress) {
        const { cep } = dataAddress;
        const addressAlreadyExists = await prisma_1.prisma.address.findUnique({
            where: {
                cep: cep
            }
        });
        return addressAlreadyExists;
    }
}
exports.default = new ReadAddressModel();
