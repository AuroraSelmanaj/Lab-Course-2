
import { DataType } from "sequelize-typescript";
import { Model } from "sequelize";
import { sequelize } from "../config/db";

export class User extends Model {
    public id!: number;
    public email!: string;
    public password!: string;
    public role!: string;
    public createdAt!: Date;
}

User.init(
    {
        id: {
            type: DataType.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: DataType.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataType.STRING,
            allowNull: false
        },
        role: {
            type: DataType.STRING,
            defaultValue: "student"
        },
        createdAt: {
            type: DataType.DATE,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'user'
    }
)
