"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = __importDefault(require("../../../services/Validator"));
class CreateAddressController {
    async createAddress(dataAddress) {
        try {
            const { rua, cidade, estado, cep } = dataAddress;
            const validatorAddress = await Validator_1.default.addressValidar({ rua, cidade, estado, cep });
            if (validatorAddress) {
                return ({
                    "error": false,
                    "message": "Endereço valido"
                });
            }
            return ({
                "error": true,
                "message": "Endereço invalido"
            });
        }
        catch (e) {
            console.log(e);
        }
    }
}
exports.default = new CreateAddressController;
