
const { Router } = require('express')
const router = Router();

const authController = require('../Controllers/authController')

//VALIDACAO DO LOGIN \\
import { store } from '../Validation/indexUsuario';
import { loginValidation } from "../Validation/loginValidation";

//ROTA DO LOGIN
router.post('/register',loginValidation,  store ,authController.create);
router.post('/login'  ,authController.login);
module.exports = router ;
//export {}
