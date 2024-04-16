"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValidation = void 0;
const express_validator_1 = require("express-validator");
exports.loginValidation = [
    (0, express_validator_1.body)('cnpj').isNumeric().isLength({
        min: 14, max: 14
    }).withMessage('CNPJ  obrigatorio ter 14 digitos'),
    (0, express_validator_1.body)('cnpj').escape().not().isEmpty().withMessage('CNPJ  obrigatorio'),
    (0, express_validator_1.body)('empresa').escape().not().isEmpty().withMessage('Empresa  obrigatorio'),
    (0, express_validator_1.body)('password').escape().not().isEmpty().withMessage('senha  obrigatorio'),
    (0, express_validator_1.body)('password').isLength({
        min: 8, max: 20
    }).withMessage(' no minimo 8 digitos'),
];
//# sourceMappingURL=loginValidation.js.map