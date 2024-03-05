"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = __importDefault(require("../../../services/Validator"));
const CreateRegistrationModel_1 = __importDefault(require("./CreateRegistrationModel"));
class CreateRegistrationController {
    async createMatriculaController(req, res) {
        let dataRegistration = req.body;
        try {
            const ValidatorRegistration = Validator_1.default.registrationValidator(dataRegistration);
            if (ValidatorRegistration) {
                return res.json({
                    "error": true,
                    "message": "O Campo " + ValidatorRegistration + " é invalido"
                });
            }
            const registration = await CreateRegistrationModel_1.default.createMatriculaModel(dataRegistration);
            if (registration?.erro) {
                return res.json({
                    "error": registration.erro,
                    "message": registration.message
                });
            }
            return res.json(registration);
        }
        catch (e) {
            return res.json({
                "error": true,
                "message": "Erro desconhecido"
            });
        }
    }
}
exports.default = new CreateRegistrationController();
