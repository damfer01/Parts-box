const UserService = require('../Controllers/usuarioControllers');

module.exports  = {
    async create(req, res) {
        try {
            const {
                cnpj,
                email,
                senha,
            } = req.body;

            const response = await UserService.create(cnpj, email, senha);

            return res.json(response);
        } catch (error) {
            console.log(error);
            return res.json({ success: false, message: 'failed to create user' })
        }
    },

    async index(req, res) {
        try {
            const response = await UserService.index();

            return res.json(response);

        } catch (error) {
            console.log(error);
            return res.json({ success: false, message: 'erro de buscar' })
        }

    },

    async show(req, res) {
        try {
            const {
                id,
            } = req.params;

            const response = await UserService.show(id);

            return res.json(response);
        } catch (error) {
            console.log(error);
            return res.json({ success: false, message: 'erro de buscar' })
        }
    },

    async update(req, res) {
        try {
            const {
                id,
            } = req.params;

            const {
                cnpj,
                username,
                senha,
            } = req.body;

            const response = await UserService.update(id, cnpj, username );

            return res.json(response);
        } catch (error) {
            console.log(error);
            return res.json({ success: false, message: 'failed to create user' })
        }
    },

    async delete(req, res) {
        try {
            const {
                id,
            } = req.params;

            const response = await UserService.delete(id);

            return res.json(response);
        } catch (error) {
            console.log(error);
            return res.json({ success: false, message: 'falha' })
        }
    },
};