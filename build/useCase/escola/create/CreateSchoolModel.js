"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ReadSchoolModel_1 = __importDefault(require("../read/ReadSchoolModel"));
class CreateSchoolModel {
    async createSchoolModel(dataSchool, tx) {
        const { nome, cod_inep, email, addressId } = dataSchool;
        const schoolAlreadyExist = await ReadSchoolModel_1.default.readSchool(dataSchool);
        if (schoolAlreadyExist) {
            return {
                "message": "Escola já cadastrada",
                "data": schoolAlreadyExist
            };
        }
        const school = await tx.escola.create({
            data: {
                nome,
                cod_inep,
                email,
                addressId
            }
        });
        return {
            "message": "Escola cadastrada com socesso",
            "data": school
        };
    }
}
exports.default = new CreateSchoolModel();
