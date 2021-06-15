const MysqlDB = require('../config/mysql');
const Sequelize = require('sequelize');

var fieldModels = MysqlDB.define("md_field",
  {
    fieldname: {
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


module.exports = fieldModels;