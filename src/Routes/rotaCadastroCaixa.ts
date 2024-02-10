import { controlesCadastroCaixa } from "../Controllers/controlesCadastroCaixa";
const { Router  } = require('express')
const express = require('express');
const router = express.Router();

console.log(' Rota caixa criada')


router.get('/', controlesCadastroCaixa);


module.exports = router;