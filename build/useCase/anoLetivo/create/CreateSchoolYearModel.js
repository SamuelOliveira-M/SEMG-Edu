"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ReadSchoolYearModel_1 = __importDefault(require("../read/ReadSchoolYearModel"));
class CreateSchoolYearModel {
    async createSchoolYearModel(dataSchooYear, tx) {
        const { data_inicio } = dataSchooYear;
        const schoolYearAlreadyExist = await ReadSchoolYearModel_1.default.readSchoolYear(dataSchooYear.data_inicio);
        if (schoolYearAlreadyExist) {
            return {
                "message": "Escola já cadastrada",
                "data": schoolYearAlreadyExist
            };
        }
        const schoolYear = await tx.anoLetivo.create({
            data: {
                data_inicio,
            }
        });
        return {
            "message": "Escola cadastrada com socesso",
            "data": schoolYear
        };
    }
}
exports.default = new CreateSchoolYearModel();
