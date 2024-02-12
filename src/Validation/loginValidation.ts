import {
    body,
  } from "express-validator";
  
  const required = 'Campo obrigatório';
  const minLength = 'Senha deve conter ao menos 6 caracteres';
  const minLengthCNPJ = 'cnpj tem  que ter 14 digitos'
  const passwords = 'Senhas não coincidem';
  
  
   module.exports = { 
    loginValidator: [
      body('empresa', required).not().isEmpty(),
      body('email', required).not().isEmpty(),
      //esta linha e pra validar o Email
      body('cnpj', required).not().isEmpty(),
      body('cnpj', minLength).not().isLength({
        min:14}),
      //esta linha e pra validar o CNPJ
      body('senha', minLength).not().isLength({
        min: 8
      }),,
     ] ,

  }
  
   // registerValidator: [



      //isso vai ser pra confirmar o cnpj
     // body('confirmPassword', minLength).isLength({
       // min: 6
     // }),
     // body('confirmPassword', passwords).custom((value, { req }) => value === req.body.password),
   //],

