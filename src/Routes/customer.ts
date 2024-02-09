import { usuarioController } from "../Controllers/usuarioControllers";
const { Router } = require('express')
const express = require('express');

const router = express.Router();

console.log('usuario rotas')

router.get('/', usuarioController);



module.exports = router;