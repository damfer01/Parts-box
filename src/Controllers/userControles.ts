const usuariosServicos = require('./Service/usuariosServicos');

module.exports = {
    async create(req, res) {
        try {
            const {
                cnpj,
                password,
            } = req.body;

            const response = await usuariosServicos.create(cnpj, password);

            return res.json(response);

        } catch (error) {
            console.log(error);
            return res.json({ success: false, message: 'ERROR ao criar usuario' })
        }
    },


    async index(req, res) {
        try {
            const response = await usuariosServicos.index();

            return res.json(response)
        } catch (error) {
            console.log(error);
            return res.json({ success: false, message: 'error de buscar' });

        }

    },

    async show(req, res) {
        try {
            const {
                id,
            } = req.params;

            const response = await usuariosServicos.show(id);

            return res.json(response);
        } catch (error) {
            console.log(error);
            res.json({ success: false, message: 'erro de buscar' });

        }
    },
    async update(req, res) {
        try {
            const {
                id,
            } = req.params;

            const {
                cnpj,
                password
            } = req.body;

            const response = await usuariosServicos.update(id, cnpj,);
            return res.json(response)
        } catch (error) {
            console.log(error);
            return res.json({ success: false, message: ' falha a criar usuarios' })

        }

    },

    async delete(req, res) {
        try {
            const {
                id,
            } = req.params;

            const response = await usuariosServicos.delete(id);

            return res.json(response);
        } catch (error) {
            console.log(error);
            return res.json({ success: false, message: 'falha ao deletar' })
        }
    }
}