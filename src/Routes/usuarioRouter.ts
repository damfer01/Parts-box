
const { Router } = require('express')
const router = Router();

const routerUsuario = require("../Controllers/usuarioControle");

import { store } from '../Validation/indexUsuario';

import { loginValidation } from "../Validation/loginValidation";

console.log('Usuario em rotas !!!')

router.post('/', loginValidation, store, routerUsuario.create);
router.get('/:id', routerUsuario.index);
router.get('/:id', routerUsuario.show);
router.put('/:id', routerUsuario.update);
router.delete('/:id', routerUsuario.delete)


module.exports = router;

export { };