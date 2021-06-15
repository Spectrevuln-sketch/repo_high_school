const MysqlDB = require('../config/mysql');
const Sequelize = require('sequelize');

var authorModel = MysqlDB.define("md_author",
  {
    student_name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    nisn: {
      type: Sequelize.STRING
    },
    major: {
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


module.exports = authorModel;