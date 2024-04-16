"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const cadastroCaixa = new mongoose_1.Schema({
    dono: { type: String, required: true },
    marca: { type: String, required: true },
    motor: { type: String, required: true },
    usuarioId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "user"
    },
    data: {
        type: Date,
        default: new Date(),
    },
    pecas: [
        {
            nome: { type: String, required: true },
            codigo: { type: String, required: false },
            medida: { type: String, required: false },
        }
    ],
    produto: { type: String, required: true, },
    quantidade: { type: String, required: false },
    codigo: [
        {
            referencia: { type: String, }
        }
    ],
    valor: [
        {
            compra: { type: Number, required: false },
            venda: { type: Number, required: false },
        }
    ],
    descricao: { type: String, required: false },
});
module.exports = (0, mongoose_1.model)('cadastroCaixa', cadastroCaixa);
//# sourceMappingURL=CaixaSchema.js.map