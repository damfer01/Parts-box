

const {  Router} = require('express')

const router = Router();

const routerUsuario = require("../Controllers/usuarioControle");
const {validateMiddleware} =   require('../Validation/indexUsuario') ;


const {loginValidator} = require("../Validation/loginValidation") ;
  
console.log('Usuario em rotas !!!')

router.post('/',loginValidator,validateMiddleware,routerUsuario.create);
router.get('/:id' , routerUsuario.index);
router.get('/:id' , routerUsuario.show);
router.put('/:id' , routerUsuario.update);
router.delete('/:id' , routerUsuario.delete)


module.exports = router;

export {};