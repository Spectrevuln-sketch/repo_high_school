/* Model Require */
const AuthorModels = require('../models/authorModels');
/* End Model Require */
const { Op } = require('sequelize');
/* Require Any Config */
var bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
/* End  Require Any Config */

//===========================================================================//
//=============================== Author Rest API ==============================//
//============================================================================//
/* Get All author Data */
exports.getAllAuthor = async (req, res) => {
  const user = req.user;
  /* Tambahkan auth Check */
  AuthorModels.findAll({})
    .then(result => {
      res.status(200).send({ message: `Get All Data Author`, data: result })
    }).catch(err => {
      res.status(500).send({ message: `Error Code ${err.message}` })
    });
}
/* End Get All author Data */

/* Delete Author */
exports.deleteAuthor = async (req, res) => {
  const user = req.user;
  /* Tambahkan auth Check */
  const author_id = req.body.idAuthor;
  if (author_id) {

    await AuthorModels.destroy({ where: { id: author_id } })
      .then(removed => {
        if (removed.id === undefined) {
          res.status(404).send({ message: `Author Tidak Ditemukan` })
        }
        else {
          res.status(200).send({ message: `Berhasil Menghapus Author ${removed.student_name}` })
        }
      }).catch(err => {
        res.status(500).send({ message: `Error Code ${err.message}` })
      })
  }
  else {

    res.status(404).send({ message: `Cannot Find Anything !` })
  }
}
/* End Delete Author */

/* Search Method */
exports.Search = async (req, res) => {
  const user = req.user
  /* Tambahkan Kondisi Auth */
  const { studentName } = req.query;
  if (studentName) {
    await AuthorModels.findAll({
      where:
      {
        student_name: { [Op.like]: '%' + studentName + '%' },
        email: { [Op.like]: '%' + studentName + '%' },
        password: { [Op.like]: '%' + studentName + '%' },
        nisn: { [Op.like]: '%' + studentName + '%' },
        major: { [Op.like]: '%' + studentName + '%' },
        gender: { [Op.like]: '%' + studentName + '%' },
      }
    }).then(result => {
      res.status(200).send({ data: result, auth: user })
    }).catch(err => {
      res.status(500).send({ message: `Error Code ${err.message}` })
    })
  }
}
/* End Search Method */

//============================ Belum Ada Axios Method ===============================
/* Create New Author */
exports.addNewAuthor = async (req, res) => {
  const user = req.user;
  /* Tambahkan Kondisi Auth */
  const { email, password } = req.body
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const alert = errors.array();
    res.status(500).send({ message: alert });
  } else {
    const passwordHashed = await bcrypt.hash(password, 10);
    const Author = new AuthorModels({
      email: email,
      passowrd: passwordHashed
    })
    Author.save()
      .then(result => {
        res.status(200).send({ data: result, message: `Berhasil Tambah Data Author !` })
      }).catch(err => {
        res.status(500).send({ message: `Error Code 500 ${err.message}` });
      })
  }
}
/* End Create New Author */

/* Edit Author */
exports.editAuthor = async (req, res) => {
  const user = req.user
  /* Tambahkan Kondisi Auth */
  const { authorid, email, passowrd } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const alert = errors.array();
    res.status(500).send({ message: alert });
  } else {
    const passwordHashed = await bcrypt.hash(password, 10);
    await AuthorModels.update({
      email: email,
      passowrd: passwordHashed
    }, {
      where: {
        id: authorid
      }
    }).then(result => {
      res.status(200).send({ message: `Update Author Berhasil !`, data: result })
    }).catch(err => {
      res.status(500).send({ message: `Filed To Update ${err.message}` });
    })
  }
}
/* End Edit Author */



