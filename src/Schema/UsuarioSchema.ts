import { Schema , model } from "mongoose";


/**Documento intrerface */



//**Schema */

const Cadastro = new Schema({
    cnpj:{ type: Number, required:true},
    email:{ type: String , required:true},
    senha:{ type: String , required: true},
    empresa:{type: String , required:true}
});

module.exports =  model('user', Cadastro)