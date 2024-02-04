class Peca {
    constructor(
        nome,
        codigo,
        medida,
    ) {
        this.nome = nome;
        this.codigo = codigo;
        this.medida = medida;
    }

    private nome: string;
    private codigo: string;
    private medida: string;

    public get getNome(): string {
        return this.nome;
    }

    public get getCodigo(): string {
        return this.codigo;
    }

    public get getMedida(): string {
        return this.medida;
    }
    //* SET SEGUINIFICA MUDAR O VALOR *///
    public set setNome(v : string) {
        this.nome = v;
    }
    
    public set setCodigo(v : string) {
        this.codigo = v;
    }
    
    public set setMedida(v : string) {
        this.medida = v;
    }
}

export default Peca;