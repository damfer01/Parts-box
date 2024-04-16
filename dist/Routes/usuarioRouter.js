"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Router } = require('express');
const router = Router();
const routerUsuario = require("../Controllers/usuarioControle");
const indexUsuario_1 = require("../Validation/indexUsuario");
const loginValidation_1 = require("../Validation/loginValidation");
console.log('Usuario em rotas !!!');
router.post('/', loginValidation_1.loginValidation, indexUsuario_1.store, routerUsuario.create);
router.get('/', routerUsuario.index);
router.get('/:id', routerUsuario.show);
router.put('/:id', routerUsuario.update);
router.delete('/:id', routerUsuario.delete);
module.exports = router;
//# sourceMappingURL=usuarioRouter.js.map