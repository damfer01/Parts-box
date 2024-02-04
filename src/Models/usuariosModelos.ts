const {Schema , model} = require('mongoose');

const UserSchema = new Schema({
    cnpj: {
        type: String,
        required:true,
    },

    password: {
        type: String,
        required:true,
        select:false,
    },
});
