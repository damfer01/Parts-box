//import { usuarioController } from "../Controllers/usuarioControllers";
const routerUsuario = require("../Controllers/usuarioControle");
const {  Router} = require('express')
const express = require('express');


const router = express.Router();

console.log('Usuario em rotas !!!')

router.post('/', routerUsuario.create);
router.get('/:id' , routerUsuario.index);
router.get('/:id' , routerUsuario.show);
router.put('/:id' , routerUsuario.update);
router.delete('/:id' , routerUsuario.delete)


module.exports = router;

export {};