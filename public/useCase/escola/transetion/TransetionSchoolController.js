"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CreateAddresController_1 = __importDefault(require("../../endereco/create/CreateAddresController"));
const CreateSchoolController_1 = __importDefault(require("../create/CreateSchoolController"));
const TransetionSchoolModel_1 = __importDefault(require("./TransetionSchoolModel"));
class TransetionSchoolController {
    async transetionSchool(req, res) {
        const { dataSchool, dataAddress } = req.body;
        try {
            const validateAddress = await CreateAddresController_1.default.createAddress(dataAddress);
            if (validateAddress.error) {
                return res.json(validateAddress.message);
            }
            const validateSchool = CreateSchoolController_1.default.CreateSchool(dataSchool);
            if (validateSchool?.error) {
                return res.json(validateSchool.message);
            }
            const school = await TransetionSchoolModel_1.default.transetionSchoolModel(dataSchool, dataAddress);
            return res.json(school);
        }
        catch (e) {
            console.log(e);
        }
    }
}
exports.default = new TransetionSchoolController();
