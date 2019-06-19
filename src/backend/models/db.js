const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(module.filename);
const db = {};
// include dotenv for configs
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  ssl: true,
  dialectOptions: {
    ssl: true
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
  // define: {
  //   createdAt: {field: 'date_created_dte', defaultValue: Date.now()},
  //   updatedAt: {field: 'date_last_update_dte', defaultValue: Date.now()},
  //   deletedAt: 'date_deleted_dte',
  //   paranoid: true,
  //   // hooks: {
  //   //     beforeCreate: (obj, options) => {
  //   //       obj.date_created_dte = Date.now()
  //   //       // Do stuff
  //   //     },
  //   //     beforeUpdate: (obj, options) => {
  //   //       obj.date_last_update_dte = Date.now()
  //   //       // Do stuff
  //   //     },
  //   // }
  // }
});

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });

fs.readdirSync(__dirname)
  .filter(file => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js')
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
    console.log(`${modelName} associate `);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
