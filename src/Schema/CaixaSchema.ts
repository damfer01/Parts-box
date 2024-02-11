import { Schema , model } from "mongoose";
const caixa = require ("../Models/Caixa");


/**Documento interface */



/**Schema */

const cadastroCaixa = new Schema({
    dono : {type:String , required: true},
    marca:{type:String , required: true},
    motor:{type: String , required: true},
    nome:{type: String , required:true},
    codigo:{type:String , required:false},
    medida:{type: String , required:false},
    data:{type:String , required:true}
});

module.exports= model('cadastroCaixa',cadastroCaixa) ; 