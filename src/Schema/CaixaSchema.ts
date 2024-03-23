import { Schema , model } from "mongoose";
const caixa = require ("../Models/Caixa");


/**Documento interface */



/**Schema */

const cadastroCaixa = new Schema({
    dono : {type:String , required: true},
    marca:{type:String , required: true},
    motor:{type: String , required: true},
    usuarioId: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
   // nome:{type: String , required:true},
   // codigo:{type:String , required:false},
    data:{
        type: Date,
        default: new Date(),
    },
    pecas:[
        {
            nome : {type:String , required: true},        
            codigo:{type:String , required:false},
            medida:{type: String , required:false},
        }
    ]

});

module.exports= model('cadastroCaixa',cadastroCaixa) ; 