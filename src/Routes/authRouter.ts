
const { Router } = require('express')
const router = Router();

const routerLogin = require('../Controllers/authController')

//VALIDACAO DO LOGIN \\
import { store } from '../Validation/indexUsuario';
import { loginValidation } from "../Validation/loginValidation";

//ROTA DO LOGIN
router.post('/login', loginValidation ,store ,routerLogin.login);

module.exports = router ;
//export {}