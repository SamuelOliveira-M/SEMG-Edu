"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const axios_1 = __importDefault(require("axios"));
class Validator {
    async addressValidar({ rua, cidade, estado, cep }) {
        try {
            const response = await axios_1.default.get(`https://viacep.com.br/ws/${cep}/json/`);
            const endereco = response.data;
            if (endereco) {
                let { bairro, localidade, uf } = endereco;
                bairro = bairro.toLowerCase();
                localidade = localidade.toLowerCase();
                uf = uf.toLowerCase();
                rua = rua.toLowerCase();
                cidade = cidade.toLowerCase();
                estado = estado.toLowerCase();
                if (rua === bairro && cidade === localidade && estado === uf) {
                    return true;
                }
                return false;
            }
            return false;
        }
        catch (error) {
            return error;
        }
    }
    studentValidator(aluno) {
        const schema = joi_1.default.object({
            nome: joi_1.default.string().min(2).max(60).required(),
            data_nascimento: joi_1.default.date().iso().max('now').required(),
            cpf: joi_1.default.string().min(11).max(11),
            municipio_nascimento: joi_1.default.string().min(2).max(40).required(),
            uf_nascimento: joi_1.default.string().min(2).max(2).required()
        });
        const validationResult = schema.validate(aluno);
        if (validationResult.error) {
            const invalidField = validationResult.error?.details[0].path;
            return invalidField;
        }
        return null;
    }
    studentGuardionsValidator(studentGuardians) {
        const schema = joi_1.default.object({
            nome_pai: joi_1.default.string().min(2).max(60).required(),
            nome_mae: joi_1.default.string().min(2).max(60).required(),
            telefone: joi_1.default.string().pattern(/^\d{11}$/).required(),
            telefone_secundario: joi_1.default.string().pattern(/^\d{11}$/)
        });
        const validationResult = schema.validate(studentGuardians);
        if (validationResult.error) {
            const invalidField = validationResult.error?.details[0].path;
            return invalidField;
        }
        return null;
    }
    schoolValidator(school) {
        const schema = joi_1.default.object({
            nome: joi_1.default.string().min(2).max(60).required(),
            cod_inep: joi_1.default.string().min(8).max(8).trim().pattern(/^[0-9]+$/),
            email: joi_1.default.string().email().max(60),
        });
        const validationResult = schema.validate(school);
        if (validationResult.error) {
            const invalidField = validationResult.error?.details[0].path;
            return invalidField;
        }
        return null;
    }
    schoolYearValidator(schoolYear) {
        const schema = joi_1.default.object({
            data_inicio: joi_1.default.date().iso().required(),
        });
        const validationResult = schema.validate(schoolYear);
        if (validationResult.error) {
            const invalidField = validationResult.error?.details[0].path;
            return invalidField;
        }
        return null;
    }
    schoolClassValidator(schoolClass) {
        const schema = joi_1.default.object({
            nome: joi_1.default.string().min(1).max(1).required(),
            serie: joi_1.default.number().integer().positive().max(9),
            turno: joi_1.default.string().min(2).max(40).required(),
            status: joi_1.default.string().valid('concluido', 'pendente').required(),
        });
        const validationResult = schema.validate(schoolClass);
        if (validationResult.error) {
            const invalidField = validationResult.error?.details[0].path;
            return invalidField;
        }
        return null;
    }
    registrationValidator(registration) {
        const schema = joi_1.default.object({
            numero_matricula: joi_1.default.string(),
            status: joi_1.default.string().min(2).max(40).required(),
            escola: joi_1.default.string().min(8).max(8).trim().pattern(/^[0-9]+$/),
            idTurma: joi_1.default.string().min(2).max(80).required(),
            alunoId: joi_1.default.string().min(2).max(40).required()
        });
        const validationResult = schema.validate(registration);
        if (validationResult.error) {
            const invalidField = validationResult.error?.details[0].path;
            return invalidField;
        }
        return null;
    }
    subjectValidator(registration) {
        const schema = joi_1.default.object({
            nome: joi_1.default.string().min(2).max(60).required(),
            carga_horaria: joi_1.default.number().integer().positive().max(9999),
        });
        const validationResult = schema.validate(registration);
        if (validationResult.error) {
            const invalidField = validationResult.error?.details[0].path;
            return invalidField;
        }
        return null;
    }
    teacherValidator(teacher) {
        console.log(teacher);
        const schema = joi_1.default.object({
            nome: joi_1.default.string().min(2).max(60).required(),
            email: joi_1.default.string().email().max(60),
            senha: joi_1.default.string().min(6).max(30).required(),
            cpf: joi_1.default.string().min(6).max(30).required(),
            data_nascimento: joi_1.default.string().min(6).max(30).required(),
            url_image: joi_1.default.string()
        });
        const validationResult = schema.validate(teacher);
        if (validationResult.error) {
            const invalidField = validationResult.error?.details[0].path;
            return invalidField;
        }
        return null;
    }
    gradeValidator(grade) {
        const schema = joi_1.default.object({
            tipo: joi_1.default.string().valid('normal', 'recuperação', 'final'),
            nota: joi_1.default.number().min(0).max(10),
            mes: joi_1.default.number().min(3).max(11).integer(),
            semestre: joi_1.default.number().min(1).max(2),
            anoLetivo: joi_1.default.date(),
            matriculaId: joi_1.default.string(),
            disciplina: joi_1.default.string().max(60)
        });
        const validationResult = schema.validate(grade);
        if (validationResult.error) {
            const invalidField = validationResult.error?.details[0].path;
            return invalidField;
        }
        return null;
    }
    managerValidator(manager) {
        const schema = joi_1.default.object({
            nome: joi_1.default.string().min(2).max(60).required(),
            email: joi_1.default.string().email().max(60),
            senha: joi_1.default.string().min(6).max(30).required(),
        });
        const validationResult = schema.validate(manager);
        if (validationResult.error) {
            const invalidField = validationResult.error?.details[0].path;
            return invalidField;
        }
        return null;
    }
}
exports.default = new Validator;
