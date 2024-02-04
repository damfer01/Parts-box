import Peca from "./Peca";
/**ATRIBUTOS */
class Caixa {
    constructor(
        marca,
        motor,
        pecas,
    ) {
        this.marca = marca;
        this.motor = motor;
        this.pecas = pecas;
    }

    private marca: string = "";
    private motor: string = "";

    private pecas: Array<Peca> = [];

    public get getMarca(): string {
        return this.marca;
    }

    public get getMotor(): string {
        return this.motor;
    }

    public get getPecas(): Array<Peca> {
        return this.pecas;
    }
    
    public set setMarca(v : string) {
        this.marca = v;
    }
    
    public set setMotor(v : string) {
        this.motor = v;
    }
    
    public set setPecas(v : Array<Peca>) {
        this.pecas = v;
    }
    /**metados */
    addPeca(peca: Peca) {
        this.pecas.push(peca);
    }

    removePeca(codigo: string) {
        this.pecas = this.pecas.filter((peca) => peca.getCodigo !== codigo);
    }
    deletePeca(nome:string){
     this.pecas =  this.pecas.filter((peca)=> peca.getNome === nome)
    }
}

export default Caixa;