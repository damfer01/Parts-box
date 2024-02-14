
const routerCadastroCaixa = require('./Routes/routerCaixa')
const usuarioRouter = require('./Routes/usuarioRouter')
const Cadastro = require('./Schema/UsuarioSchema')

const cors = require('cors');
const express = require('express');

const app = express();
const server = require('http').Server(app);


//**TUDO SOBRE O  MONGO  */
app.use(cors());
app.use(express.json());





const mongoose = require('mongoose');
const body = require('body-parser')
mongoose.connect("mongodb+srv://kaua:283186@cluster0.9m3dc2c.mongodb.net/register_box?retryWrites=true&w=majority");

mongoose.connection
    .once('open', () => console.log('ate agora deu certo !!!'))
    .on('error', (error) => {
        console.log('error:', error);
    });
     
   
    //body parser 

    app.use(body.json());

    //ROTAS GERAL
    
    //ROTA PRINCIPAL DA CAIXA \\
    app.use('/cadastroCaixa', routerCadastroCaixa);
    //ROTA PRINCIPAL DO USUARIO
    app.use('/cadastrousuario' , usuarioRouter);


    // PORTA DE ENTRADA||SAIDA
    server.listen(3333, () => {
        console.log('O servidor está rodando na porta');
    });

