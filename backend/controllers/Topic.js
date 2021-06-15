/* Model Require */
const topicModels = require('../models/topicModels');
/* End Model Require */
const Sequelize = require('sequelize')
const Op = Sequelize.Op;
/* Require Any Config */
var bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
/* End  Require Any Config */

///===========================================================================================
//=====================================/* Fields Controllers */																				
//===========================================================================================

exports.TopicData = async (req, res) => {
  await topicModels.findAll({}).then(results => {
    res.status(200).send({ data: results })
  }).catch(err => {
    res.status(500).send({ message: `Error Code ${err.message}` })
  })
}

exports.createTopic = async (req, res) => {
  const { topicname } = req.body
  const user = req.user
  const Topic = new topicModels({
    topicname
  })
  Topic.save().then(results => {
    res.status(200).send({ message: `Success Full Added Field !`, data: results, status: 200 })
  }).catch(err => {
    res.status(500).send({ message: `Error Cannot Added Data ${err.message}` })
  })
}

exports.deleteTopic = async (req, res) => {
  const idTopic = req.body.idTopic
  await topicModels.destroy({ where: { id: idTopic } }).then(response => {
    res.status(200).send({ data: { message: `Success Delete Topic`, status: 200, return: response } })
  }).catch(err => {
    res.status(500).send({ data: { message: `Error Cannot Delete Topic ${err.message}` } })
  })
}

/* Search Method */
exports.Search = async (req, res) => {
  const user = req.user
  /* Tambahkan Kondisi Auth */
  const { topicName } = req.query;
  if (topicName) {
    await topicModels.findAll({
      where:
      {
        topicname: { [Op.like]: '%' + topicName + '%' },
      }
    }).then(result => {
      res.status(200).send({ data: result, auth: user })
    }).catch(err => {
      res.status(500).send({ message: `Error Code ${err.message}` })
    })
  }
}
/* End Search Method */

/* Update Topic */
exports.UpdateTopic = async (req, res) => {
  const user = req.user
  const idTopic = req.params.id
  const { inputTopicName } = req.body
  if (inputTopicName) {
    await topicModels.update({
      topicname: inputTopicName
    }, {
      where: {
        id: idTopic
      }
    }).then(result => {
      res.status(200).send({ message: `Data Berhasil Di Update ! ${result.topicname}`, data: result })
    }).catch(err => {
      res.status(500).send({ message: `Cannot Update Data !`, errors: err.message })
    })
  }
  else {
    res.status(200).send({ message: `Topicname Is not defind!` })
  }
}
/* End Update Topic */
