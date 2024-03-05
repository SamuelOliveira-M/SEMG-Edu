"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cpfValidationMiddleware = void 0;
// import * as cpfValidator from 'cpf-cnpj-validator';
function cpfValidationMiddleware(req, res, next) {
    const bollean = true;
    if (bollean) {
        return next();
    }
    res.json('999');
}
exports.cpfValidationMiddleware = cpfValidationMiddleware;
;
exports.default = cpfValidationMiddleware;
