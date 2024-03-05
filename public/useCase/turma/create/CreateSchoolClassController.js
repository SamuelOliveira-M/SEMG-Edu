"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = __importDefault(require("../../../services/Validator"));
class CreateSchoolClassController {
    createSchoolClass(dataSchoolClass) {
        try {
            const validatorSchoolClass = Validator_1.default.schoolClassValidator(dataSchoolClass);
            if (validatorSchoolClass) {
                return ({
                    "error": true,
                    "message": "O Campo " + validatorSchoolClass + " é invalido"
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
exports.default = new CreateSchoolClassController();
