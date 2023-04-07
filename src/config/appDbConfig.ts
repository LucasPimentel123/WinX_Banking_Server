import { Dialect } from "sequelize";

require('dotenv/config');

export const appDbConfig = {
    dialect: 'postgres' as Dialect,
    host: process.env.DB_APP_HOST as string,
    username: process.env.DB_APP_USER as string,
    password: process.env.DB_APP_PASS as string,
    database: process.env.DB_APP_NAME as string,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
};