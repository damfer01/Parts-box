

export async function usuarioController(req: any, res: any) {
    try {

        const { db } = req.app;

        const { cnpj, email, senha , empresa } = req.body;

        //**Metados cnpj */
        if (!cnpj) {
            return res.status(400).json({ message: 'cnpj obrigatorio' });
        };

        if (cnpj && cnpj.length === 14) {
            return res.status(400).json({ message: 'cnpj deve ter 14 dígitos' });

        };

        //**Metados email */
        if (!email) {
            return res.status(400).json({ message: 'email obrigatorio' });

        };

        //Metados empresa //
        if (!empresa) {
            return res.status(400).json({ message: 'empresa obrigatorio' });
        };

        //**Metados senha */
        if (senha && senha.length < 10) {
            return res.status(400).json({ message: 'a senha deve ter pelo menos 10 dígitos' });

        };

        //**check if custumer exists */

        const exitstingCustomer = await db.collection('customers').findOne({
            cnpj: cnpj.toLowerCase()
        });

        if (exitstingCustomer) {
            return res.status(400).json({ message: 'Usuario existente' })
        }

        //**Atributos */
        const result = await db.collection('customers').insertOne({
            cnpj: cnpj.toLowerCase(),
            email,
            senha,
            empresa: empresa.toLowerCase()
        });

        res.status(200).json({ message: 'Usuario criado' });

        console.log(result);

    
    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }

    
    
}
