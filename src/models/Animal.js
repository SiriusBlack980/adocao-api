import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database.js';


export class Animal extends Model {}


Animal.init({
id: { type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV4 },
nome: { type: DataTypes.STRING, allowNull: false },
especie: { type: DataTypes.STRING, allowNull: false },
porte: { type: DataTypes.STRING },
castrado: { type: DataTypes.BOOLEAN, defaultValue: false },
vacinado: { type: DataTypes.BOOLEAN, defaultValue: false },
adotado: { type: DataTypes.BOOLEAN, defaultValue: false },
descricao: { type: DataTypes.TEXT },
foto: { type: DataTypes.BLOB('long') }, // Buffer/BLOB
}, {
sequelize,
modelName: 'Animal',
tableName: 'animais',
timestamps: true,
});