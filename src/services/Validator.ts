import Joi from 'joi';
import axios from 'axios';

import IAluno from '../interface/IStudent';
import IEndereco from '../interface/IAddrees';
import IStudentGuardians from '../interface/IStudentGuardians';
import ISchool from '../interface/ISchool';

class Validator {
  
  async addressValidar({rua,cidade,estado,cep}:IEndereco){
		
    try{		
			const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    	const endereco = response.data
			
			
			if(endereco){
				let {bairro,localidade,uf} = endereco
				
				bairro = bairro.toLowerCase()
				localidade = localidade.toLowerCase()
				uf = uf.toLowerCase()

				rua = rua.toLowerCase()
				cidade = cidade.toLowerCase()
				estado = estado.toLowerCase()
				
				if(rua===bairro && cidade===localidade && estado===uf){
					return true
				}
				return false
			}
			return false
		
		}catch(error){
			return error
		}		
  }

	studentValidator(aluno:IAluno ) {
    const schema = Joi.object({
      nome: Joi.string().min(2).max(60).required(),
      data_nascimento: Joi.date().iso().max('now').required(),
			cpf: Joi.string().min(11).max(11),
			municipio_nascimento: Joi.string().min(2).max(40).required(),
      uf_nascimento: Joi.string().min(2).max(2).required()
    });  
		
    const validationResult = schema.validate(aluno);

  	if (validationResult.error) {
    	const invalidField = validationResult.error?.details[0].path;
    	return invalidField;
  	}

  	return null;
  }

	studentGuardionsValidator(studentGuardians:IStudentGuardians){
	const schema = Joi.object({
		nome_pai: Joi.string().min(2).max(60).required(),
		nome_mae: Joi.string().min(2).max(60).required(),
    telefone:Joi.string().pattern(/^\d{11}$/).required(),
		telefone_secundario:Joi.string().pattern(/^\d{11}$/)
    });  
    const validationResult = schema.validate(studentGuardians);

  	if (validationResult.error) {
    	const invalidField = validationResult.error?.details[0].path;
    	return invalidField;
  	}
  	return null;
	}

	schoolValidator(school:ISchool){
		const schema = Joi.object({
			nome: Joi.string().min(2).max(60).required(),
			cod_inep: Joi.number().integer().positive().max(999999999),
			email:Joi.string().email().max(60),
		});

		const validationResult = schema.validate(school);

		if (validationResult.error) {
			const invalidField = validationResult.error?.details[0].path;
			return invalidField;
		}

		return null;
	}

	schoolYearValidator(schoolYear:ISchoolYear){
		const schema = Joi.object({
			data_inicio: Joi.date().required(),
			data_finalizacao:Joi.date().required()
		});

		const validationResult = schema.validate(schoolYear);

		if (validationResult.error) {
			const invalidField = validationResult.error?.details[0].path;
			return invalidField;
		}

		return null;
	}
}

export default new Validator;
