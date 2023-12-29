import Joi from 'joi';
import axios from 'axios';

import IAluno from '../interface/IStudent';
import IEndereco from '../interface/IAddrees';

class Validator {
  validarAluno(aluno:IAluno ) {
    const schema = Joi.object({
      nome: Joi.string().min(2).max(60).required(),
      data_nascimento: Joi.date().iso().max('now').required(),
			cpf: Joi.string().min(11).max(11),
			municipio_nascimento: Joi.string().min(2).max(40).required(),
      uf_nascimento: Joi.string().min(2).max(2).required(),
			responsavelId: Joi.string().uuid().required(),
			addressId: Joi.string().uuid().required(),
    });
    
    return schema.validate(aluno);
  }
  async validarCep({rua,cidade,estado,cep}:IEndereco){
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
}

export default new Validator;
