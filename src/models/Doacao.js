import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database.js';


export class Doacao extends Model {}


Doacao.init({
id: { type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV4 },
nome: { type: DataTypes.STRING },
email: { type: DataTypes.STRING },
valor: { type: DataTypes.FLOAT, allowNull: false, validate: { min: 0.01 } },
mensagem: { type: DataTypes.STRING },
linkPix: { type: DataTypes.TEXT },
qrcodeBase64: { type: DataTypes.TEXT },
}, {
sequelize,
modelName: 'Doacao',
tableName: 'doacoes',
timestamps: true,
});