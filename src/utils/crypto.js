import encrypt from 'encryptjs';
import 'dotenv/config';


const salt = process.env.JWT_SECRET || 'saltpadrao';


export function hashPassword(plain) {
return encrypt.encrypt(plain, salt, 256);
}


export function comparePassword(plain, hashed) {
try {
const decrypted = encrypt.decrypt(hashed, salt, 256);
return decrypted === plain;
} catch {
return false;
}
}