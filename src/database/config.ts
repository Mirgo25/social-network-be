import { Dialect } from 'sequelize';
import * as dotenv from 'dotenv';

dotenv.config();

interface IDatabaseConfig {
  username: string;
  password: string | null;
  database: string;
  host: string;
  port: string;
  dialect: Dialect;
}

interface IConfig {
  development: IDatabaseConfig;
  stage: IDatabaseConfig;
  production: IDatabaseConfig;
}

const config: IConfig = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
  },
  stage: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
  },
};

export default config;
module.exports = config;
