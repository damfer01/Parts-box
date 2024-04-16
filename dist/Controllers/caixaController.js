const Service = require('../Service/caixaService');
module.exports = {
    async create(req, res) {
        const user_id = req.user_id;
        try {
            const { dono, marca, motor, data, pecas, produto, quantidade, codigo, valor, descricao } = req.body;
            const response = await Service.create(user_id, dono, marca, motor, data, pecas, produto, quantidade, codigo, valor, descricao);
            return res.json(response);
        }
        catch (error) {
            console.log(error);
            return res.json({ success: false, message: '[ERROR] ao criar caixa' });
        }
    },
    async index(req, res) {
        const user_id = req.user_id;
        try {
            const response = await Service.index(user_id);
            return res.json(response);
        }
        catch (error) {
            console.log(error);
            return res.json({ success: false, message: 'erro de buscar' });
        }
    },
    async show(req, res) {
        const user_id = req.user_id;
        try {
            const { id, } = req.params;
            const response = await Service.show(user_id, id);
            return res.json(response);
        }
        catch (error) {
            console.log(error);
            return res.json({ success: false, message: 'erro de buscar' });
        }
    },
    async update(req, res) {
        const user_id = req.user_id;
        try {
            const { id, } = req.params;
            const { dono, marca, motor, nome, codigo, medida, data, } = req.body;
            const response = await Service.update(user_id, id, dono, marca, motor, nome, codigo, medida, data);
            return res.json(response);
        }
        catch (error) {
            console.log(error);
            return res.json({ success: false, message: 'não foi possível criar o usuário' });
        }
    },
    async delete(req, res) {
        const user_id = req.user_id;
        try {
            const { id, } = req.params;
            const response = await Service.delete(user_id, id);
            return res.json(response);
        }
        catch (error) {
            console.log(error);
            return res.json({ success: false, message: 'falha' });
        }
    },
};
//# sourceMappingURL=caixaController.js.map