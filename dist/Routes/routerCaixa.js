"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Router } = require('express');
const routerr = Router();
const routerCaixa = require("../Controllers/caixaController");
const { authenticate } = require("../config/auth");
//Validar o login
const indexCaixa_1 = require("../Validation/indexCaixa");
//validar a caixa
const caixaValidation_1 = require("../Validation/caixaValidation");
console.log(' Caixa em rotas!!!');
routerr.post('/', authenticate, caixaValidation_1.caixaValidation, indexCaixa_1.storeCaixa, routerCaixa.create);
routerr.get('/', authenticate, routerCaixa.index);
routerr.get('/:id', authenticate, routerCaixa.show);
routerr.put('/:id', authenticate, routerCaixa.update);
routerr.delete('/:id', authenticate, routerCaixa.delete);
module.exports = routerr;
//# sourceMappingURL=routerCaixa.js.map