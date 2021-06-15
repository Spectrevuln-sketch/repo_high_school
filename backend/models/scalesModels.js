const MysqlDB = require('../config/mysql');
const Sequelize = require('sequelize');

var scalesModel = MysqlDB.define("md_scales",
  {
    scalesname: {
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


module.exports = scalesModel;