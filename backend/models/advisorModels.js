const MysqlDB = require('../config/mysql');
const Sequelize = require('sequelize');

var advisorModel = MysqlDB.define("md_advisor",
  {
    teacher_name: {
      type: Sequelize.STRING
    },
    nuptk: {
      type: Sequelize.STRING
    },
    gender: {
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


module.exports = advisorModel;