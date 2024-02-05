import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Configurações
const app = express();
const PORT = 3000;
const SECRET_KEY = 'sua_chave_secreta';

// Conexão com o banco de dados MongoDB
mongoose.connect('mongodb://localhost:27017/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro de conexão ao MongoDB:'));
db.once('open', () => console.log('Conectado ao MongoDB!'));

// Definição do Schema do usuário
const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String,
});

interface UserDocument extends mongoose.Document {
  username: string;
  password: string;
}

const User = mongoose.model<UserDocument>('User', userSchema);

// Middleware para processar JSON
app.use(express.json());

// Rota de registro de usuário
app.post('/register', async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    // Verifica se o usuário já existe
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Usuário já existe' });
    }

    // Hash da senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Criação do usuário
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'Usuário registrado com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao registrar usuário' });
  }
});

// Rota de login
app.post('/login', async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    // Procura pelo usuário
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: 'Usuário não encontrado' });
    }

    // Verifica a senha
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Senha incorreta' });
    }

    // Gera o token JWT
    const token = jwt.sign({ username }, SECRET_KEY);

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao fazer login' });
  }
});

// Middleware para verificar token
function authenticateToken(req: Request, res: Response, next: () => void) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, SECRET_KEY, (err: any, user: any) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// Rota protegida
app.get('/protected', authenticateToken, (req: any, res: Response) => {
  res.json(req.user);
});

// Inicia o servidor
app.listen(PORT, () => console.log(`Servidor iniciado na porta ${PORT}`));
