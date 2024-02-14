const { Router } = require('express');
const routes = Router();


const AuthRoutes = require('../Routes/authRouter');

const UserRoutes = require('../Routes/usuarioRouter');



routes.use('/auth', AuthRoutes );
routes.use('/user', UserRoutes );


module.exports = routes;     