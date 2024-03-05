"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../../../lib/prisma");
const CreateAddressModel_1 = __importDefault(require("../../endereco/create/CreateAddressModel"));
const CreateSchoolModel_1 = __importDefault(require("../create/CreateSchoolModel"));
class TransetionSchoolModel {
    async transetionSchoolModel(dataSchool, dataAddress) {
        const schoolCreationTransaction = await prisma_1.prisma.$transaction(async (tx) => {
            const address = await CreateAddressModel_1.default.createAddressModel(dataAddress, tx);
            dataSchool.addressId = address.data.id;
            const school = await CreateSchoolModel_1.default.createSchoolModel(dataSchool, tx);
            return {
                address,
                school
            };
        });
        return schoolCreationTransaction;
    }
}
exports.default = new TransetionSchoolModel();
