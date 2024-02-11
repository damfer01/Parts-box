const Caixabcrypt = require('bcrypt');

const   Caixa = require('../Schema/CaixaSchema');

module.exports = {
    
    async create(dono, marca, motor ,nome, codigo, medida, data) {
        const hash = await Caixabcrypt.hash(data, 10);
        await   Caixa.create({
            dono,
            marca,
            motor,
            nome,
            codigo,
            medida,
            data : hash,
        });

        return { success: true, message: 'sucesso' };
    },

    async index(id) {
        const users = await  Caixa.find(id);
           
        return {
            success: true,
            message: ' recovered',
            result: users,
            
        };
        
        
    },

    async show(id) {
        const user = await  Caixa.findById(id);
        
        return {
            success: true,
            message: ' user recovered success',
            result: user,
        };
    },

   async update(id, dono, marca,motor ,nome, codigo, medida, data ) {
        await   Caixa.findByIdAndUpdate(id ,{
            dono,
            marca,
            motor,
            nome,
            codigo,
            medida,
            data
 
        });

        return { success: true, message: 'sucesso' };


    },

    async delete(id) {
        console.log(id)
        await   Caixa.findByIdAndDelete(id);

        return {
            success: true,
            message: ' deleted'
        }
    },


};