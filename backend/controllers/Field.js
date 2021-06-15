/* Model Require */
const fieldModels = require('../models/fieldModels');
/* End Model Require */
const { Op } = require('sequelize');
/* Require Any Config */
var bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const { response } = require('express');
/* End  Require Any Config */

///===========================================================================================
//=====================================/* Fields Controllers */																				
//===========================================================================================
exports.createFields = async (req, res) => {
  const { fieldname } = req.body
  const user = req.user
  const Field = new fieldModels({
    fieldname
  })
  Field.save().then(results => {
    res.status(200).send({ message: `Success Full Added Field !`, data: results, status: 200 })
  }).catch(err => {
    res.status(500).send({ message: `Error Cannot Added Data ${err.message}` })
  })
}

exports.getFields = async (req, res) => {
  const user = req.user
  fieldModels.findAll({}).then(results => {
    res.status(200).send({ data: results })
  }).catch(err => {
    res.status(500).send({ message: `Cannot Get Data Error ${err.message}` })
  })
}

exports.deleteFields = async (req, res) => {
  const user = req.user
  const idField = req.body.idField
  await fieldModels.destroy({
    where: { id: idField }
  }).then(response => {
    res.status(200).send({ message: `Field Berhasil Di hapus !`, response: response })
  }).catch(err => {
    res.status(500).send({ message: `Field Tidak Dapat Dihapus ~ ${err.message}` })
  })
}
exports.Search = async (req, res) => {
  const user = req.user
  /* Tambahkan Kondisi Auth */
  const { fieldName } = req.query;
  if (fieldName) {
    await fieldModels.findAll({
      where:
      {
        fieldname: { [Op.like]: '%' + fieldName + '%' },
      }
    }).then(result => {
      res.status(200).send({ data: result, auth: user })
    }).catch(err => {
      res.status(500).send({ message: `Error Code ${err.message}` })
    })
  }
}
