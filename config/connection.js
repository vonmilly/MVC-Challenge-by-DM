const Sequelize = require('sequelize');
require('dotenv').config();

// Enable access to .env variables
require('dotenv').config();

// Use environment variables to connect to database
const sequelize = new Sequelize(
  process.env.JAWSDB_URL || null,
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: 'mysql'
  }
);

module.exports = sequelize;