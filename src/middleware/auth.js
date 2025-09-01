import jwt from 'jsonwebtoken';
import 'dotenv/config';


export function auth(req, res, next) {
const header = req.headers.authorization || '';
const token = header.startsWith('Bearer ') ? header.slice(7) : null;
if (!token) return res.status(401).json({ erro: 'Token ausente' });
try {
const payload = jwt.verify(token, process.env.JWT_SECRET);
req.user = payload; // { id, role }
next();
} catch (e) {
return res.status(401).json({ erro: 'Token inválido' });
}
}


export function isAdmin(req, res, next) {
if (req.user?.role !== 'admin') return res.status(403).json({ erro: 'Acesso não autorizado' });
next();
}