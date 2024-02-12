const routerCaixa = require("../Controllers/caixaController")
const { Router  } = require('express')
const expresss = require('express');

const routerr = expresss.Router();

console.log(' Caixa em rotas!!!')


routerr.post('/', routerCaixa.create);
routerr.get('/:id' , routerCaixa.index);
routerr.get('/:id' , routerCaixa.show);
routerr.put('/:id' , routerCaixa.update);
routerr.delete('/:id' , routerCaixa.delete)


module.exports = routerr;

export {};