import { controlesCadastroCaixa } from "../Controllers/controlesCadastroCaixa";
const curdUsuario = require("../Controllers/crudUsuarioControle")
const { Router  } = require('express')
const express = require('express');
const router = express.Router();

console.log(' Rota caixa criada')


router.get('/', controlesCadastroCaixa);
router.post('/', curdUsuario.create);
router.get('/:id' , curdUsuario.index);
router.get('/:id' , curdUsuario.show);
router.put('/:id' , curdUsuario.update);
router.delete('/:id' , curdUsuario.delete)


module.exports = router;