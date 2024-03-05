"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ReadAddressModel_1 = __importDefault(require("../read/ReadAddressModel"));
class CreateAddressModel {
    async createAddressModel(dataAddress, tx) {
        const { rua, cidade, estado, cep } = dataAddress;
        const addressAlreadyExists = await ReadAddressModel_1.default.readAddress(dataAddress);
        if (addressAlreadyExists) {
            return {
                "message": "Endereço já existe no sistema",
                "data": addressAlreadyExists
            };
        }
        const address = await tx.address.create({
            data: {
                rua,
                cidade,
                estado,
                cep
            }
        });
        return {
            "message": "Endereço criado com sucesso",
            "data": address
        };
    }
}
exports.default = new CreateAddressModel();
