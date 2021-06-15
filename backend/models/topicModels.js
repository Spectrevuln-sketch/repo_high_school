const MysqlDB = require('../config/mysql');
const Sequelize = require('sequelize');

var topicModels = MysqlDB.define("md_topic",
  {
    topicname: {
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


module.exports = topicModels;