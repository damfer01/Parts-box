"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Caixa = void 0;
/**ATRIBUTOS */
class Caixa {
    constructor(marca, motor, pecas) {
        this.marca = "";
        this.motor = "";
        this.pecas = [];
        this.marca = marca;
        this.motor = motor;
        this.pecas = pecas;
    }
    get getMarca() {
        return this.marca;
    }
    get getMotor() {
        return this.motor;
    }
    get getPecas() {
        return this.pecas;
    }
    set setMarca(v) {
        this.marca = v;
    }
    set setMotor(v) {
        this.motor = v;
    }
    set setPecas(v) {
        this.pecas = v;
    }
    /**metados */
    addPeca(peca) {
        this.pecas.push(peca);
    }
    removePeca(codigo) {
        this.pecas = this.pecas.filter((peca) => peca.getCodigo !== codigo);
    }
    deletePeca(nome) {
        this.pecas = this.pecas.filter((peca) => peca.getNome === nome);
    }
}
exports.Caixa = Caixa;
//# sourceMappingURL=Caixa.js.map