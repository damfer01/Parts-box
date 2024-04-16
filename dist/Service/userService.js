const bcrypt = require('bcrypt');
const User = require('../Schema/UsuarioSchema');
const authService = require('./authService');
module.exports = {
    async create(cnpj, empresa, password) {
        const user = await User.findOne({ empresa });
        if (!!user)
            return { success: false, message: 'usuário já cadastrado' };
        const hash = await bcrypt.hash(password, 10);
        await User.create({
            cnpj,
            empresa,
            password: hash,
        });
        const { result } = await authService.create(empresa, password);
        return {
            success: true,
            message: 'user successfully created',
            result,
        };
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
    async update(id, cnpj, empresa) {
        await User.findByIdAndUpdate(id, {
            cnpj,
            empresa,
        });
        return { success: true, message: 'sucesso' };
    },
    async delete(id) {
        console.log(id);
        await User.findByIdAndDelete(id);
        return {
            success: true,
            message: ' deleted'
        };
    },
};
//# sourceMappingURL=userService.js.map