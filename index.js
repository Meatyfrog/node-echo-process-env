console.log(process.env);

const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.databasename, process.env.databaseuser, process.env.databasepassword, {
  host: process.env.ROUTINATOR_DB_PORT,
  dialect: 'postgres',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });