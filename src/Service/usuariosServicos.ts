const bcrypt = require('bcrypt');

const usuarios = require('./Controllers/userControles');

module.exports = {
    async create(cnpj, password) {
        const hash = await bcrypt.hash(password, 10);
        await usuarios.create({
            cnpj,
            password: hash,
        });

        return { success: true, message: 'sucesso' };
    },

    async index() {
        const users = await usuarios.find();

        return {
            success: true,
            message: ' recovered',
            result: users,
        };
    },

    async show(id) {
        const user = await usuarios.findById(id);

        return {
            success: true,
            message: ' user recovered success',
            result: user,
        };
    },

    async update(id, cnpj) {
        await usuarios.findByIdAndUpdate(id ,{
            cnpj,
        
 
        });

        return { success: true, message: 'sucesso' };


    },

    async delete(id) {
        await usuarios.findByIdAndDelete(id);

        return {
            success: true,
            message: ' deleted'
        }
    },
};