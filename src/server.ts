

const routerCustomer = require('./Routes/usuarioRouter')
const routerCadastroCaixa = require('./Routes/rotaCadastroCaixa')
const cors = require('cors');

const express = require('express');

const app = express();
const server = require('http').Server(app);


//**TUDO SOBRE O  MONGO  */
app.use(cors());
app.use(express.json());




import { MongoClient } from "mongodb";
const mongoose = require('mongoose');
const body = require('body-parser')
mongoose.connect("mongodb+srv://kaua:283186@cluster0.9m3dc2c.mongodb.net/?retryWrites=true&w=majority");

mongoose.connection
    .once('open', () => console.log('ate agora deu certo !!!'))
    .on('error', (error) => {
        console.log('error:', error);
    });

async function start() {
    try {

        const app = express();
        const server = require('http').Server(app);

        const mongo = await MongoClient.connect("mongodb+srv://kaua:283186@cluster0.9m3dc2c.mongodb.net/?retryWrites=true&w=majority");
        await mongo.connect();

        app.db = mongo.db();

        //body parser 

        app.use(body.json({
            lismit: '500kb'
        }));

        //Routes
        app.use('/cadastrousuario', routerCustomer);
        app.use('/cadastroCaixa', routerCadastroCaixa)

        server.listen(3333, () => {
            console.log('O servidor está rodando na porta')
        })
        
    } catch (error) {
        console.log(error)
    }
    
   
}
start()

