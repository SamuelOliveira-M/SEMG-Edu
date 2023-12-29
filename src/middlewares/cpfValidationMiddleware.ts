import { Request,Response,NextFunction } from "express";

// import * as cpfValidator from 'cpf-cnpj-validator';

export function cpfValidationMiddleware(req:Request,res:Response,next:NextFunction){
    const bollean = true;

    if(bollean){
      return next()
    }

    res.json('999')
  
};

export default cpfValidationMiddleware;
