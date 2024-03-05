"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = __importDefault(require("../../../services/Validator"));
const CreateManagerModel_1 = __importDefault(require("./CreateManagerModel"));
class CreateManagerController {
    async createTeacherController(req, res) {
        let dataManager = req.body;
        try {
            const validatorManager = Validator_1.default.teacherValidator(dataManager);
            if (validatorManager) {
                return res.json({
                    "error": true,
                    "message": "O Campo " + validatorManager + " é invalido"
                });
            }
            const manager = await CreateManagerModel_1.default.createManagerModel(dataManager);
            return res.json(manager);
        }
        catch (e) {
            console.log(e);
            return res.json({
                "error": true,
                "message": "Erro desconhecido"
            });
        }
    }
}
exports.default = new CreateManagerController();
