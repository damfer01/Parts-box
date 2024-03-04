// ****Controller de Caixa ***///

const Service = require('../Service/caixaService');

module.exports = {
    async create(req, res) {
        try {
            const {
                dono,
                marca,
                motor,
                data,
                pecas,
                
            } = req.body;

            const response = await Service.create(dono, marca, motor, data, pecas,);

            return res.json(response);
        } catch (error) {

            console.log(error);
            return res.json({ success: false, message: '[ERROR] ao criar caixa' })
        }
    },
    async index(req, res) {
        try {
            const response = await Service.index();

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

            const response = await Service.show(id);

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
                dono,
                marca,
                motor,
                nome,
                codigo,
                medida,
                data,
            } = req.body;

            const response = await Service.update(id, dono, marca, motor, nome, codigo, medida, data);

            return res.json(response);
        } catch (error) {
            console.log(error);
            return res.json({ success: false, message: 'não foi possível criar o usuário' })
        }
    },

    async delete(req, res) {
        try {
            const {
                id,
            } = req.params;

            const response = await Service.delete(id);

            return res.json(response);
        } catch (error) {
            console.log(error);
            return res.json({ success: false, message: 'falha' })
        }
    },
};