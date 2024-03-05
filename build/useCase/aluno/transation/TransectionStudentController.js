"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CreateAddresController_1 = __importDefault(require("../../endereco/create/CreateAddresController"));
const CreateStudentGuardiansController_1 = __importDefault(require("../../responsaveis/create/CreateStudentGuardiansController"));
const CreateAlunoController_1 = __importDefault(require("../create/CreateAlunoController"));
const TransectionStudentModel_1 = __importDefault(require("./TransectionStudentModel"));
class TransactionStudantController {
    async studentCreationTransaction(req, res) {
        const error = [];
        const jsonString = req.body.data;
        const { dataStudent, dataAddress, dataResponsibile } = JSON.parse(jsonString);
        const urlImage = req.headers.filebaseUrl;
        try {
            const address = await CreateAddresController_1.default.createAddress(dataAddress);
            if (address.error) {
                error.push(address);
            }
            const resposibile = await CreateStudentGuardiansController_1.default.CreateStudentGuardians(dataResponsibile);
            if (resposibile.error) {
                error.push(resposibile);
            }
            dataStudent.data_nascimento = new Date(dataStudent.data_nascimento);
            const student = await CreateAlunoController_1.default.createAlunoController(dataStudent);
            if (student?.error) {
                error.push(student);
            }
            if (error.length > 0) {
                res.json(error);
            }
            const transactionStudant = await TransectionStudentModel_1.default.transactionStudantModel({
                dataStudent,
                dataAddress,
                dataResponsibile,
                urlImage
            });
            res.json(transactionStudant);
        }
        catch (e) {
            // if(error.length>0){
            // 	res.json(error)
            // }
            // res.status(500).json(e)
            console.log(e);
        }
    }
}
exports.default = new TransactionStudantController();
