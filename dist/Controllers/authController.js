"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authService = require('../Service/authService');
const UserService = require('../Service/userService');
module.exports = {
    async create(req, res) {
        try {
            const { cnpj, empresa, password, } = req.body;
            const response = await UserService.create(cnpj, empresa, password);
            return res.json(response);
        }
        catch (error) {
            console.log(error);
            return res.json({ success: false, message: 'Failed to create user' });
        }
    },
    async login(req, res) {
        try {
            const { empresa, password, } = req.body;
            const response = await authService.create(empresa, password);
            return res.json(response);
        }
        catch (err) {
            return res.json({ success: false, message: 'failed to login' });
        }
    },
};
//# sourceMappingURL=authController.js.map