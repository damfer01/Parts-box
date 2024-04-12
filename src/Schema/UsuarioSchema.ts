import { Schema , model } from "mongoose";


const  Cadastro = new Schema({
    cnpj:{ type: Number },

   empresa:{type: String },

   password:{ type: String },
   
});

module.exports =  model('user', Cadastro)
