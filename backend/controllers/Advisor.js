/* Model Require */
const AdvisorModels = require('../models/advisorModels');
/* End Model Require */
const { Op } = require('sequelize');
/* Require Any Config */
var bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
/* End  Require Any Config */

///===========================================================================================
//=====================================/* AdVisor Controllers */																				
//===========================================================================================
/* Create New Advisor */
exports.createAdvisor = async (req, res) => {
  const { inputTeacherName, inputNUPTK, gender } = req.body
  const user = req.user
  /* Tambahkan Kondisi Jika Auth */
  const Advisor = new AdvisorModels({
    teacher_name: inputTeacherName,
    nuptk: inputNUPTK,
    gender: gender
  })
  Advisor.save()
    .then(result => {
      res.status(200).send({ message: `Berhasil Tambah Data Teacher ${result.teacher_name}` })
    }).catch(err => {
      res.status(500).send({ message: `Invalid Create New Teacher ${err.message}` })
    })

}
/* Get All Advisoer */
exports.getAdvisor = async (req, res) => {
  const user = req.user
  if (user)
    AdvisorModels.findAll({})
      .then(results => {
        res.status(200).send({ data: results })
      }).catch(err => {
        res.status(500).send({ message: `Error Code ${err.message}` })
      })
  else
    res.status(403).send({ message: `Forbidden You Do not allow to do This!!` })
}

exports.deleteAdvisor = async (req, res) => {
  const user = req.user
  const idAdvisor = req.body.idAdvisor
  if (idAdvisor)
    await AdvisorModels.destroy({
      where: { id: idAdvisor }
    }).then(removed => {
      if (removed.id === undefined)
        res.status(404).send({ message: `ID Is Not Defind` })
      else
        res.status(200).send({ message: `Success Delete Advisor !`, data: removed })
    })
}

/* Search Method */
exports.Search = async (req, res) => {
  const user = req.user
  /* Tambahkan Kondisi Auth */
  const { teacherName } = req.query;
  if (teacherName) {
    await AuthorModels.findAll({
      where:
      {
        teacher_name: { [Op.like]: '%' + teacherName + '%' },
        nuptk: { [Op.like]: '%' + teacherName + '%' },
        gender: { [Op.like]: '%' + teacherName + '%' },
      }
    }).then(result => {
      res.status(200).send({ data: result, auth: user })
    }).catch(err => {
      res.status(500).send({ message: `Error Code ${err.message}` })
    })
  }
}
/* End Search Method */