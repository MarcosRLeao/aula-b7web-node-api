import { Model, DataTypes } from "sequelize";
import { sequelize } from '../instances/pg';

export interface PhrasesInstance extends Model{
    id: number,
    author: string,
    txt: string,
} 

export const Phrases = sequelize.define<PhrasesInstance>('Phrases',{
    id:{
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    author:{
        type: DataTypes.STRING
    },
    txt:{
        type: DataTypes.STRING
    }
},{
    tableName: 'phrases',
    timestamps: false,
    
}

)
