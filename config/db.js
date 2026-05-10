const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASSWORD, 
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'mysql',
        logging: false, // Para que no llene la terminal de textos raros
        dialectOptions: {
            connectTimeout: 60000, // Le damos más tiempo para conectar (1 minuto)
            ssl: {
                rejectUnauthorized: false
            }
        }
    }
);

module.exports = sequelize;