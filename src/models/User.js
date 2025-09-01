import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database.js';


export class User extends Model {}


User.init({
id: { type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV4 },
nome_completo: { type: DataTypes.STRING, allowNull: false },
senha: { type: DataTypes.STRING, allowNull: false }, // criptografada (encryptjs)
email: { type: DataTypes.STRING, allowNull: false, unique: true, validate: { isEmail: true } },
cidade: DataTypes.STRING,
estado: DataTypes.STRING,
idade: { type: DataTypes.INTEGER },
telefone: DataTypes.STRING,
instagram: DataTypes.STRING,
facebook: DataTypes.STRING,
role: { type: DataTypes.ENUM('tutor','admin'), defaultValue: 'tutor' }
}, {
sequelize,
modelName: 'User',
tableName: 'users',
timestamps: true,
});