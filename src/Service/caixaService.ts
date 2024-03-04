const Caixabcrypt = require('bcrypt');

const Caixa = require('../Schema/CaixaSchema');

module.exports = {

    async create(dono, marca, motor,data, pecas) {
        
        await Caixa.create({
            dono,
            marca,
            motor,
            data,
            pecas,
        });

        return { success: true, message: 'sucesso' };
    },

    async index() {
        const users = await Caixa.find();

        return {
            success: true,
            message: ' recovered',
            result: users,

        };


    },

    async show(id) {
        const user = await Caixa.findById(id);

        return {
            success: true,
            message: ' user recovered success',
            result: user,
        };
    },

    async update(id, dono, marca, motor, data,pecas) {
        await Caixa.findByIdAndUpdate(id, {
            dono,
            marca,
            motor,
            data,
            pecas,

        });

        return { success: true, message: 'sucesso' };


    },

    async delete(id) {
        console.log(id)
        await Caixa.findByIdAndDelete(id);

        return {
            success: true,
            message: ' deleted'
        }
    },


};