const Sequelize = require('sequelize');
require('dotenv').config();

// Enable access to .env variables
require('dotenv').config();

// Use environment variables to connect to database
const sequelize = new Sequelize(
    process.env.JAWSDB_URL || '',
    {
      dialect: 'mysql',
      protocol: 'mysql',
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
      }
    }
  );
  
module.exports = sequelize;