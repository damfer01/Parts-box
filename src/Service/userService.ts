const bcrypt = require('bcrypt');

const User = require('../Schema/UsuarioSchema');


module.exports = {

    async create(cnpj, empresa, password) {
        const hash = await  bcrypt.hash(password, 10)
        await User.create({
            cnpj,
            empresa,
            password:hash,
        });

        return { success: true, message: 'sucesso' };
    },

    async index() {
        const users = await User.find();

        return {
            success: true,
            message: ' recovered',
            result: users,
        };
    },

    async show(id) {
        const user = await User.findById(id);

        return {
            success: true,
            message: ' user recovered success',
            result: user,
        };
    },

    async update(id, cnpj, empresa,) {
        await User.findByIdAndUpdate(id, {
            cnpj,
            empresa,

        });

        return { success: true, message: 'sucesso' };


    },

    async delete(id) {
        console.log(id)
        await User.findByIdAndDelete(id);

        return {
            success: true,
            message: ' deleted'
        }
    },
};