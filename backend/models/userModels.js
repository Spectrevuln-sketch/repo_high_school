const MysqlDB = require('../config/mysql');
const Sequelize = require('sequelize');

var userModels = MysqlDB.define("user_login",
  {
    username: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    role: {
      type: Sequelize.STRING
    },
    updatedAt: {
      type: Sequelize.DATE
    },
    createdAt: {
      type: Sequelize.DATE
    }
  },
  {
    timestamps: true
  }
)


module.exports = userModels;