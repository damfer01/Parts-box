import {
    body
  } from "express-validator";
  
  
  
   export const caixaValidation = [
    //caixaValidator:()=> {
            //DONO DA CAIXA(PEÇA)
      body('dono').escape().not().isEmpty().withMessage('Proprietario  é obrigatorio'),

          //MARCA DO MOTOR(PECA)
        body('marca').escape().not().isEmpty().withMessage('Marca é obrigatoria'),
           //QUAL MOTOR 
        body('motor').escape().not().isEmpty().withMessage('Motor é obrigatorio'),

        body('nome').escape().not().isEmpty().withMessage('Nome da peça  é obrigatorio'),
       
      
            //DATA OBRIGATORIA PRA SABER QUANDO SAIU E ENTROU 
        body('data').escape().not().isEmpty().withMessage('data é obrigatorio'),
        body('data').isLength({
          min:8, max: 8 }).withMessage(' no minimo 8 digitos'),
        
         
       
//},
];
