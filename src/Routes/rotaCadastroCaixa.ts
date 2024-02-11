const controlesCadastroCaixa = require("../Controllers/caixaController")
const { Router  } = require('express')
const expresss = require('express');

const routerr = expresss.Router();

console.log(' Caixa em rotas!!!')


routerr.post('/', controlesCadastroCaixa.create);
routerr.get('/:id' , controlesCadastroCaixa.index);
routerr.get('/:id' , controlesCadastroCaixa.show);
routerr.put('/:id' , controlesCadastroCaixa.update);
routerr.delete('/:id' , controlesCadastroCaixa.delete)


module.exports = routerr;

export {};