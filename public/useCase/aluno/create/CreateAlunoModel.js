"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ReadStudentModel_1 = __importDefault(require("../read/ReadStudentModel"));
class CreateAlunoModel {
    async createAlunoModel(dataStudent, tx, responsavelId, addressId, urlImage) {
        const { nome, data_nascimento, municipio_nascimento, uf_nascimento, cpf } = dataStudent;
        const dataNascimentos = new Date(data_nascimento);
        const alunoAlreadyExist = await ReadStudentModel_1.default.readStudent(cpf);
        if (alunoAlreadyExist) {
            return {
                "message": "Aluno já existe no sistema",
                "data": alunoAlreadyExist
            };
        }
        const aluno = await tx.aluno.create({
            data: {
                nome,
                data_nascimento: dataNascimentos,
                municipio_nascimento,
                uf_nascimento,
                cpf,
                url_image: urlImage,
                responsavelId,
                addressId
            }
        });
        return {
            "message": "Aluno criado com sucesso",
            "data": aluno
        };
    }
}
exports.default = new CreateAlunoModel();
