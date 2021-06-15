/* Model Require */
const ScalesModels = require('../models/scalesModels');
/* End Model Require */
const Sequelize = require('sequelize')
const Op = Sequelize.Op;
/* Require Any Config */
var bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
/* End  Require Any Config */

//=============================================== Get All =========================================

exports.getScales = async (req, res) => {
  ScalesModels.findAll({}).then(respones => {
    res.status(200).send({ message: `Success added Data !`, data: respones })
  }).catch(err => {
    res.status(500).send({ message: `Error ${err.message}` })
  })
}

exports.deleteScales = async (req, res) => {
  const user = req.user
  const idScales = req.body.idScales
  ScalesModels.destroy({
    where: {
      id: idScales
    }
  }).then(results => {
    res.status(200).send({ data: { message: `Berhasil menghapus data ${results.scalesname} !`, status: 200, response: results } })
  }).catch(err => {
    res.status(500).send({ data: { message: `Tidak Dapat Menghapus Data ! ${err.message}` } })
  })
}

exports.Search = async (req, res) => {
  const user = req.user
  /* Tambahkan Kondisi Auth */
  const { scalesName } = req.query;
  if (scalesName) {
    await ScalesModels.findAll({
      where:
      {
        scalesname: { [Op.like]: '%' + scalesName + '%' },
      }
    }).then(result => {
      res.status(200).send({ data: result, auth: user })
    }).catch(err => {
      res.status(500).send({ message: `Error Code ${err.message}` })
    })
  }
}
exports.UpdateScales = async (req, res) => {
  const user = req.user
  const idScales = req.params.id
  const { inputScalesName } = req.body
  if (inputScalesName) {

    await ScalesModels.update({
      scalesname: inputScalesName
    }, {
      where: {
        id: idScales
      }
    }).then(scales => {
      res.status(200).send({ message: `Data Has been updated ! ${scales.scalesname}` })
    }).catch(err => {
      res.status(500).send({ message: `Cannot Updated Data ${err.message}` })
    })
  } else {
    res.status(404).send({ message: `Data Not Found !` })
  }
}
