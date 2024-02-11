//import { usuarioController } from "../Controllers/usuarioControllers";
const curdUsuario = require("../Controllers/usuarioControle");
const {  Router} = require('express')
const express = require('express');

const router = express.Router();

console.log('Usuario em rotas !!!')

router.post('/', curdUsuario.create);
router.get('/:id' , curdUsuario.index);
router.get('/:id' , curdUsuario.show);
router.put('/:id' , curdUsuario.update);
router.delete('/:id' , curdUsuario.delete)


module.exports = router;