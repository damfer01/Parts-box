const { Router  } = require('express')
const routerr = Router();
const routerCaixa = require("../Controllers/caixaController")

     //Validar o login
import { storeCaixa } from "../Validation/indexCaixa";

   //validar a caixa
import { caixaValidation } from "../Validation/caixaValidation";

console.log(' Caixa em rotas!!!')

routerr.post('/',caixaValidation,storeCaixa, routerCaixa.create);

routerr.get('/:id' , routerCaixa.index);
routerr.get('/:id' , routerCaixa.show);
routerr.put('/:id' , routerCaixa.update);
routerr.delete('/:id' , routerCaixa.delete)


module.exports = routerr;

export {};