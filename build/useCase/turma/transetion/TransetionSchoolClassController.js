"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CreateSchoolYearController_1 = __importDefault(require("../../anoLetivo/create/CreateSchoolYearController"));
const TransetionSchoolClassModel_1 = __importDefault(require("./TransetionSchoolClassModel"));
const CreateSchoolClassController_1 = __importDefault(require("../create/CreateSchoolClassController"));
class TransetionSchoolClassController {
    async transetionSchoolClass(req, res) {
        const dataSchoolClass = req.body;
        const { cod_inep } = req.params;
        try {
            const dataFormatada = new Date();
            const createDate = {
                data_inicio: dataFormatada
            };
            const validaitorSchoolYear = CreateSchoolYearController_1.default.createSchoolYear(createDate);
            if (validaitorSchoolYear?.error) {
                return res.json(validaitorSchoolYear.message);
            }
            const validaitorSchoolClass = CreateSchoolClassController_1.default.createSchoolClass(dataSchoolClass);
            if (validaitorSchoolClass?.error) {
                return res.json(validaitorSchoolClass.message);
            }
            const schoolClass = await TransetionSchoolClassModel_1.default.TransetionSchoolClassModel(createDate, dataSchoolClass, cod_inep);
            return res.json(schoolClass);
        }
        catch (e) {
            console.log(e);
        }
    }
}
exports.default = new TransetionSchoolClassController();
