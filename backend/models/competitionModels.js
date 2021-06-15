const MysqlDB = require('../config/mysql');
const Sequelize = require('sequelize');

var competitionModel = MysqlDB.define("md_competition",
  {
    competitionname: {
      type: Sequelize.STRING
    },
    date: {
      type: Sequelize.STRING
    },
    organizer: {
      type: Sequelize.STRING
    },
    location: {
      type: Sequelize.STRING
    },
    scales: {
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


module.exports = competitionModel;