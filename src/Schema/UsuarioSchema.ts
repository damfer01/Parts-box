import { Schema } from "mongoose";


/**Documento intrerface */

interface UsuarioSchema {
    cnpj: number,
    email: string,
    senha: string
    
};

//**Schema */

const Cadastro = new Schema<UsuarioSchema>({
    cnpj:{ type: Number, required:true},
    email:{ type: String , required:true},
    senha:{ type: String , required: true}
});

export default Cadastro;