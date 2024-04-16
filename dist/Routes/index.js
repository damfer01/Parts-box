const { Router } = require('express');
const routes = Router();
const caixaRouter = require('./routerCaixa');
const AuthRoutes = require('../Routes/authRouter');
const UserRoutes = require('../Routes/usuarioRouter');
routes.use('/auth', AuthRoutes);
routes.use('/user', UserRoutes);
routes.use('/caixa', caixaRouter);
module.exports = routes;
//# sourceMappingURL=index.js.map