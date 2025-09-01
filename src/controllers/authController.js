import jwt from 'jsonwebtoken';
import { User } from '../models/index.js';
import { comparePassword } from '../utils/crypto.js';

export async function login(req, res) {
  try {
    const { email, senha } = req.body;

    if (!email || !senha) {
      return res.status(400).json({ erro: 'Email e senha são obrigatórios' });
    }

    const user = await User.findOne({ where: { email } });

    if (!user || !comparePassword(senha, user.senha)) {
      return res.status(401).json({ erro: 'Email ou senha inválidos.' });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET, 
      { expiresIn: '1h' }    
    );

    return res.json({ token });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ erro: 'Erro no servidor' });
  }
}
