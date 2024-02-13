import { Schema , model } from "mongoose";


/**Documento intrerface */


//**Schema */

const  Cadastro = new Schema({
    cnpj:{ type: Number, },
    email:{ type: String , },
    senha:{ type: String ,},
    empresa:{type: String , }
   
});




module.exports =  model('user', Cadastro)
