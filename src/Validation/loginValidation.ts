import {
  body
} from "express-validator";


export const loginValidation = [
  //loginValidator:()=> {

  //validação  do CNPJ
  body('cnpj').isNumeric().isLength({
    min: 14, max: 14
  }).withMessage('CNPJ  obrigatorio ter 14 digitos'),

  body('cnpj').escape().not().isEmpty().withMessage('CNPJ  obrigatorio'),


  //Validação  do Email
  //body('email').escape().not().isEmpty().isEmail().withMessage('Email invalido'),

  body('empresa').escape().not().isEmpty().withMessage('Empresa  obrigatorio'),

  
  body('password').escape().not().isEmpty().withMessage('senha  obrigatorio'),
  body('password').isLength({
    min: 8, max: 20
  }).withMessage(' no minimo 8 digitos'),

];

