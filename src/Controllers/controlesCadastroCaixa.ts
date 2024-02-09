export async function controlesCadastroCaixa(req:any , res:any) {
    
    try {

        const {db} = req.app;

        const{dono,marca , motor , nome , codigo , medida , data} = req.body;

        //**Metados obrigatorio dono ,Marca , Motor , Data  */

        if(!dono){
            return res.status(400).json({message: 'nome do proprietario obrigatorio'})
        }
        if(!marca){
            return res.status(400).json({ message: 'Marca obrigatoria' });
            
        };

        if(!motor){
            return res.status(400).json({ message: 'Motor obrigatoria' });

        };

        if(!data){
            return res.status(400).json({ message: 'Data obrigatoria' });

        };

        if(data && data.length === 8){
            return res.status(400).json({message: 'falta digitos no cadastro da Data' });
        };


        const existeData = await db.collection('cadastroCaixa').findOne({
            marca: marca.toLowerCase(),
            motor: motor.toLowerCase(),
            data: data.toLowerCase()
        });

        const resultado = await db.collection('cadastroCaixa').insertOne({
            marca: marca.toLowerCase(),
            motor: motor.toLowerCase(),
            data: data.toLowerCase(),
            nome, 
            codigo,
            medida,
            dono
        });

        res.json({message: 'peças inserida na caixa!!'})
    }catch(error){
         res.status(500).json({ error: error.toString() });

    };
}