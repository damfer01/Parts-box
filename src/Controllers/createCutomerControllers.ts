export async function createCustumerController(req: any , res: any) {
    try{

        const{db} = req.app;

        const {cnpj, email , senha } = req.body;
 
        //**Metados cnpj */
        if( !cnpj ){
            return res.status(400).json({ message:'cnpj obrigatorio'});
        };

        if(cnpj && cnpj.length === 14 ){
            return res.status(400).json({message: ' cnpj deve ter 14 dígitos'});

        };

        //**Metados email */
        if( !email ){
           return res.status(400).json({ message: ' email obrigatorio'});
        };
            //**Metados senha */
        if( senha && senha.length< 10 ){
           return res.status(400).json({message: ' a senha deve ter pelo menos 10 dígitos'});

        };

            //**check if custumer exists */

            const exitstingCustomer = await db.collection('customers').findOne({
                cnpj: cnpj.toLowerCase()
            });

            if(exitstingCustomer){
             return res.status(400).json({message: ' customer already exists'})
            }

            //**Atributos */
        const result = await db.collection('customers').insertOne({
            cnpj: cnpj.toLowerCase(),
            email,
            senha
        });

      res.status(200).json({message:'Customer created'});

        console.log(result);

        
    }catch(error){
        res.status(500).json({error: error.toString() });
    }
}
