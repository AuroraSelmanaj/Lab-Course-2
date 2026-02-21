import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const dbName: string = process.env.DB_NAME || "test";
const dbuser: string = process.env.DB_USER || "test";
const dbPassword: string = process.env.DB_PASSWORD || "test";

export const sequelize = new Sequelize(
    dbName,
    dbuser,
    dbPassword,
    {
        host: process.env.DB_HOST,
        dialect: "mysql",
    }
);
