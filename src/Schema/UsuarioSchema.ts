import { Schema , model } from "mongoose";
import { NextFunction, Request, Response } from "express"

/**Documento intrerface */


//**Schema */

const  Cadastro = new Schema({
    cnpj:{ type: Number, min:14},
    email:{ type: String , required:true,},
    senha:{ type: String ,min:8},
    empresa:{type: String , required:true}
   
});




module.exports =  model('user', Cadastro)
