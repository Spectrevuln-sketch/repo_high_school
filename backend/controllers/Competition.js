var competitionModels = require('../models/competitionModels');
const { Op } = require('sequelize');
/* Require Any Config */
var bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const router = require('../routes/api');
/* End  Require Any Config */

///===========================================================================================
//=====================================/* Compettiton Controllers */																				
//===========================================================================================
/* Create new Competition */
exports.createCompetition = async (req, res) => {
  const { competitionname, date, location, organizer, scales } = req.body;
  const user = req.user;
  /* tambahkan kondisi jika auth */
  const Competition = new competitionModels({
    competitionname,
    date,
    location,
    organizer,
    scales
  })
  Competition.save().then(results => {
    req.status(200).send({ status: 200, data: results })
  }).catch(err => {
    req.status(500).send({ message: `Error Cannot Added New Competition ~ ${err.message}` })
  })
}
/* Get All Data Compettion */
exports.getAllCompetition = async (req, res) => {
  await competitionModels.findAll({}).then(results => {
    res.status(200).send({ data: results })
  }).catch(err => {
    res.status(500).send({ message: `Error Cannot Get Data ~ ${err.message} ` })
  })
}
exports.deleteCompetition = async (req, res) => {
  const { idCompetition } = req.body
  await competitionModels.destroy({
    where: {
      id: idCompetition
    }
  }).then(resutls => {
    res.status(200).send({ message: `Succesed Delete Topic`, data: resutls })
  }).catch(err => {
    res.status(500).send({ message: `Cannot Delete ${err.message}` })
  })
}

exports.Search = async (req, res) => {
  const user = req.user
  /* Tambahkan Kondisi Auth */
  const { competitionName } = req.query;
  if (competitionName) {
    await competitionModels.findAll({
      where:
      {
        competitionname: { [Op.like]: '%' + competitionName + '%' },
      }
    }).then(result => {
      res.status(200).send({ data: result, auth: user })
    }).catch(err => {
      res.status(500).send({ message: `Error Code ${err.message}` })
    })
  }
}

exports.UpdateCompetition = async (req, res) => {
  const user = req.user;
  const idCompetition = req.params.id
  const { inputCompetitionName, inputDate, inputLocation, inputOrganizer, inputScales } = req.body
  if (req.body) {

    await competitionModels.update({
      competitionname: inputCompetitionName,
      date: inputDate,
      organizer: inputOrganizer,
      location: inputLocation,
      scales: inputLocation
    }, {
      where: {
        id: idCompetition
      }
    }).then(competition => {
      res.status(200).send({ message: `Data Berhasil Di update`, status: 200, data: competition })
    }).catch(err => {
      res.status(500).send({ message: `Error Code ${err.message}` })
    })
  } else {
    res.status(404).send({ message: `Cannot Add` })
  }
}