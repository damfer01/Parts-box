 import{ Request, Response} from 'express';
import { validationResult  } from'express-validator';


export const store = async function (request:Request, response:Response, next) {
     try {
        const errors =  validationResult(request);
        if(!errors.isEmpty()){
            return response.status(400).json({ errors: errors.array() });
        }next()
     }catch(error){
        console.log(error)
     }

     console.log(store)
}

// const validateMiddleware = routes.all('*', (req:Express.Request, res:Response, next: NextFunction ) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }else next;
  
  
//  console.log(validateMiddleware)
// });


// module.exports  = {validateMiddleware};
