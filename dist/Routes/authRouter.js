"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Router } = require('express');
const router = Router();
const authController = require('../Controllers/authController');
//VALIDACAO DO LOGIN \\
const indexUsuario_1 = require("../Validation/indexUsuario");
const loginValidation_1 = require("../Validation/loginValidation");
//ROTA DO LOGIN
router.post('/register', loginValidation_1.loginValidation, indexUsuario_1.store, authController.create);
router.post('/login', authController.login);
module.exports = router;
//export {}
//# sourceMappingURL=authRouter.js.map