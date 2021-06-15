const sequelize = require("sequelize");
const mysqldb = require("../config/db");

/* configuration mysql db */
const MysqlDB = new sequelize(mysqldb.sequelize.dbName, mysqldb.sequelize.user, mysqldb.sequelize.password, {
  host: mysqldb.sequelize.options.host,
  dialect: mysqldb.sequelize.options.dialect
});

MysqlDB.sync({});


module.exports = MysqlDB;