import { NextFunction, Request, Response } from "express"
const validUser = require('../Schema/UsuarioSchema')

/*   
required
min
max
type
lenght


 */
const validationRegex:any ={
    email:{
        regex:"^[a-zA-Z0-9+_.-]+@[a-zA-z0-9.-]+$"
    }
}

function validate(Schema:any){

    const validation = (requst:Request , response:Response, next:NextFunction) =>{
        console.log(requst.body);

        const{body}=requst;
        const error:string[] = [];

        Object.keys(Schema).forEach( item=>{
          console.log (item +"----"+body(item));
      
            const itemSchema = Schema(item);

                if(itemSchema.required && !body(item)){
                    error.push(`Campo ${item} - ${itemSchema.required}`);

                };

                if(itemSchema.min && (body[item].lenght < itemSchema.min)){
                    error.push(`Campo ${item} - O tamanho minimo e 14 digitos`)
                }

                
                if(itemSchema.max && (body[item].lenght > itemSchema.max)){
                    error.push(`Campo ${item} - O tamanho maximo  e 14 digitos`)
                }

               const regexItem = validationRegex[item]
                if(regexItem[item] && (new RegExp(regexItem.regex).test(body[item]))){
                    error.push(`Campo ${item} - esta no formato incorreto!`)


                }
         });

         if(error.length > 0 ) return response.status(400).json({error});

         console.log(error);

        return next();
    }

    return validation ;
}

export{validate};