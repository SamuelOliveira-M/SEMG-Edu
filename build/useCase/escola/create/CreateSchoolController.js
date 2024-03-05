"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = __importDefault(require("../../../services/Validator"));
class CreateSchoolController {
    CreateSchool(dataSchool) {
        try {
            const validatorSchool = Validator_1.default.schoolValidator(dataSchool);
            if (validatorSchool) {
                return ({
                    "error": true,
                    "message": "O Campo " + validatorSchool + " é invalido"
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
exports.default = new CreateSchoolController();
