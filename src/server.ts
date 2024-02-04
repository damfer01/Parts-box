import Caixa from "./Models/Caixa";
import Peca from "./Models/Peca";

const mongoose = require('mongoose');
const cors = require('cors');
const usuarios = require('./Routes/usuariosRotas');
const express = require('express');

const app = express();
const server = require('http').Server(app);

// mongoose.connect("mongodb+srv://kaua:283186@cluster0.9m3dc2c.mongodb.net/?retryWrites=true&w=majority");

// mongoose.connection
//     .once('open', () => console.log('ate agora deu certo !!!'))
//     .on('error', (error) => {
//         console.log('error:', error);
//     });


app.use(usuarios)
app.use(cors());
app.use(express.json());

app.use('/', (req, res) => {
    const caixa = new Caixa(
        'MWM',
        '3201',
        [
            new Peca('Cabeçote 1', '1234', '10x20x30'),
            new Peca('Cabeçote 2', '1235', '10x20x30'),
            new Peca('Cabeçote 3', '1236', '10x20x30'),
        ],
    );

    caixa.addPeca(new Peca('Correia', '3333', '10x0x10'));

    console.log('CAIXA => ', caixa);

    caixa.removePeca('122');

    console.log('CAIXA => ', caixa);

    caixa.deletePeca('correia')

    console.log('Caixa =>', caixa)
    
    return res.json();
});

server.listen(3333);