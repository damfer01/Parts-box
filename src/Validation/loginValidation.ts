import {
  body
} from "express-validator";


export const loginValidation = [
  
  body('cnpj').isNumeric().isLength({
    min: 14, max: 14
  }).withMessage('CNPJ  obrigatorio ter 14 digitos'),

  body('cnpj').escape().not().isEmpty().withMessage('CNPJ  obrigatorio'),

  body('empresa').escape().not().isEmpty().withMessage('Empresa  obrigatorio'),

  body('password').escape().not().isEmpty().withMessage('senha  obrigatorio'),

  body('password').isLength({
    min: 8, max: 20
  }).withMessage(' no minimo 8 digitos'),

];

