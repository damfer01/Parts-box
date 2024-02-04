const {Router} = require('express');//atalho 
const routes = Router();


const UserRoutes= require('./usuariosRotas');


routes.use('/usuarios', UserRoutes );


module.exports = routes;