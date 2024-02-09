import { Schema } from "mongoose";
const caixa = require ("../Models/Caixa");


/**Documento interface */

interface  CaixaSchema{
    dono: string,
   marca : string,
   motor : string,
   nome: string,
   codigo: string,
   medida: string
    data: string
};

/**Schema */

const cadastroCaixa = new Schema<CaixaSchema>({
    dono : {type:String , required: true},
    marca:{type:String , required: true},
    motor:{type: String , required: true},
    nome:{type: String , required:true},
    codigo:{type:String , required:false},
    medida:{type: String , required:false},
    data:{type:String , required:true}
});

export default cadastroCaixa ; 