"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Peca {
    constructor(nome, codigo, medida) {
        this.nome = nome;
        this.codigo = codigo;
        this.medida = medida;
    }
    get getNome() {
        return this.nome;
    }
    get getCodigo() {
        return this.codigo;
    }
    get getMedida() {
        return this.medida;
    }
    //* SET SEGUINIFICA MUDAR O VALOR *///
    set setNome(v) {
        this.nome = v;
    }
    set setCodigo(v) {
        this.codigo = v;
    }
    set setMedida(v) {
        this.medida = v;
    }
}
exports.default = Peca;
//# sourceMappingURL=Peca.js.map