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

      //  body('peca').escape().not().isEmpty().withMessage('Nome da peça  é obrigatorio'),
       
      
            //DATA OBRIGATORIA PRA SABER QUANDO SAIU E ENTROU 
        
         
       
//},
];
