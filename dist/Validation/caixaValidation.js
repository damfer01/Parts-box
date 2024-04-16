"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.caixaValidation = void 0;
const express_validator_1 = require("express-validator");
exports.caixaValidation = [
    (0, express_validator_1.body)('dono').escape().not().isEmpty().withMessage('Proprietario  é obrigatorio'),
    (0, express_validator_1.body)('marca').escape().not().isEmpty().withMessage('Marca é obrigatoria'),
    (0, express_validator_1.body)('motor').escape().not().isEmpty().withMessage('Motor é obrigatorio'),
    (0, express_validator_1.body)('produto').escape().not().isEmpty().withMessage('produto é obrigatorio'),
    (0, express_validator_1.body)('quantidade').escape().not().isEmpty().withMessage('quantidade é obrigatorio'),
    (0, express_validator_1.body)('valor').escape().not().isEmpty().withMessage('valor é obrigatorio'),
    (0, express_validator_1.body)('descricao').escape().not().isEmpty().withMessage('descrição  é obrigatorio'),
];
//# sourceMappingURL=caixaValidation.js.map