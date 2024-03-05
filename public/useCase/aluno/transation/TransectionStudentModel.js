"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../../../lib/prisma");
const CreateAddressModel_1 = __importDefault(require("../../endereco/create/CreateAddressModel"));
const CreateAlunoModel_1 = __importDefault(require("../create/CreateAlunoModel"));
const CreateStudentGuardiansModel_1 = __importDefault(require("../../responsaveis/create/CreateStudentGuardiansModel"));
class TransactionStudantModel {
    async transactionStudantModel({ dataStudent, dataAddress, dataResponsibile, urlImage }) {
        const StudentCreationTransaction = await prisma_1.prisma.$transaction(async (tx) => {
            const address = await CreateAddressModel_1.default.createAddressModel(dataAddress, tx);
            const guardians = await CreateStudentGuardiansModel_1.default.createStudentGuardians(dataResponsibile, tx);
            const addressId = address.data.id;
            const responsavelId = guardians.data.id;
            const student = await CreateAlunoModel_1.default.createAlunoModel(dataStudent, tx, responsavelId, addressId, urlImage);
            return {
                "address": address,
                "guardians": guardians,
                "student": student
            };
        });
        return StudentCreationTransaction;
    }
}
exports.default = new TransactionStudantModel();
