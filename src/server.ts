
const routerCadastroCaixa = require('./Routes/rotaCadastroCaixa')
const usuarioRouter = require('./Routes/usuarioRouter')
const cors = require('cors');

const express = require('express');

const app = express();
const server = require('http').Server(app);


//**TUDO SOBRE O  MONGO  */
app.use(cors());
app.use(express.json());




import { MongoClient } from "mongodb";
import { validate } from "./Validation/usuarioValidation";
const mongoose = require('mongoose');
const body = require('body-parser')
mongoose.connect("mongodb+srv://kaua:283186@cluster0.9m3dc2c.mongodb.net/register_box?retryWrites=true&w=majority");

mongoose.connection
    .once('open', () => console.log('ate agora deu certo !!!'))
    .on('error', (error) => {
        console.log('error:', error);
    });

async function start() {
    try {

        const app = express();
        const server = require('http').Server(app);

        //body parser 

        app.use(body.json());

        //Routes
        app.use('/cadastroCaixa',validate({}) ,routerCadastroCaixa);
        app.use('/cadastrousuario',validate({}), usuarioRouter)

        server.listen(3333, () => {
            console.log('O servidor está rodando na porta')
        })

    } catch (error) {
        console.log(error)
    }


}
start()

