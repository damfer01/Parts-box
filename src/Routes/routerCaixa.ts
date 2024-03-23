const { Router  } = require('express')
const routerr = Router();
const routerCaixa = require("../Controllers/caixaController")

const {authenticate} = require("../config/auth")

     //Validar o login
import { storeCaixa } from "../Validation/indexCaixa";

   //validar a caixa
import { caixaValidation } from "../Validation/caixaValidation";

console.log(' Caixa em rotas!!!')

routerr.post('/', authenticate,caixaValidation,storeCaixa, routerCaixa.create);
routerr.get('/', authenticate, routerCaixa.index);
routerr.get('/:id', authenticate, routerCaixa.show);
routerr.put('/:id', authenticate, routerCaixa.update);
routerr.delete('/:id', authenticate, routerCaixa.delete)


module.exports = routerr;

export {};