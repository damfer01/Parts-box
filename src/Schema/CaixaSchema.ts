import { Schema , model } from "mongoose";

const cadastroCaixa = new Schema({
    dono : {type:String , required: true},

    marca:{type:String , required: true},

    motor:{type: String , required: true},
    
    usuarioId: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
  
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