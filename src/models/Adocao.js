import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database.js';


export class Adocao extends Model {}


Adocao.init({
id: { type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV4 },
tutor_id: { type: DataTypes.UUID, allowNull: false },
animal_id: { type: DataTypes.UUID, allowNull: false },
status: { type: DataTypes.ENUM('em_analise','aprovado','rejeitado','cancelado'), defaultValue: 'em_analise' },
posicao_fila: { type: DataTypes.INTEGER, allowNull: false },
}, {
sequelize,
modelName: 'Adocao',
tableName: 'adocoes',
timestamps: true,
});