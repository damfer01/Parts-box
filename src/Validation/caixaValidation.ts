import { body } from "express-validator";
  
   export const caixaValidation = [
     
      body('dono').escape().not().isEmpty().withMessage('Proprietario  é obrigatorio'),

        body('marca').escape().not().isEmpty().withMessage('Marca é obrigatoria'),
          
        body('motor').escape().not().isEmpty().withMessage('Motor é obrigatorio'),

];
