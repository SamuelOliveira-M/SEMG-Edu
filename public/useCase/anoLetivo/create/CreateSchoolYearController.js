"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = __importDefault(require("../../../services/Validator"));
class CreateSchoolYearController {
    createSchoolYear(dataSchooYear) {
        try {
            const validatorSchoolYear = Validator_1.default.schoolYearValidator(dataSchooYear);
            if (validatorSchoolYear) {
                return ({
                    "error": true,
                    "message": "O Campo " + validatorSchoolYear + " é invalido"
                });
            }
            return ({
                "error": false,
                "message": "Campos validos"
            });
        }
        catch (e) {
            console.log(e);
        }
    }
}
exports.default = new CreateSchoolYearController();
