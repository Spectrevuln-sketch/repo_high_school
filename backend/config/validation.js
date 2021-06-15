const { check, validationResult } = require('express-validator');
const User = require('../models/userModels');

exports.validate = (method) => {
  switch (method) {
    /* Validate user Register Page */
    case 'user_register': {
      return [
        check('username')
          .notEmpty().withMessage('username Harus Di isi !')
          .isLength({ min: 3 }).withMessage('Nama Minimal 3 Karakter !')
          .custom(user => {
            return User.findOne({ where: { username: user } }).then(result => {
              if (result) {
                return Promise.reject('Username Already In Use');
              }
            })
          }),
        check('password')
          .isLength({ min: 5 }).not().withMessage('Password Minimal 5 Karakter !')
          .notEmpty().withMessage('Password tidak boleh kosong !')
      ]
    }
  }
  switch (method) {
    /* Validate user Register Page */
    case 'author_create': {
      return [
        check('email')
          .notEmpty().withMessage('username Harus Di isi !')
          .isLength({ min: 3 }).withMessage('Nama Minimal 3 Karakter !')
          .custom(user => {
            return User.findOne({ where: { username: user } }).then(result => {
              if (result) {
                return Promise.reject('Username Already In Use');
              }
            })
          }),
        check('password')
          .isLength({ min: 5 }).not().withMessage('Password Minimal 5 Karakter !')
          .notEmpty().withMessage('Password tidak boleh kosong !')
      ]
    }
  }
  switch (method) {
    case 'create_advisor': {
      return [
        check('email')
          .isEmail().withMessage('Email Tidak Valid !')
          .notEmpty().withMessage('Email Tidak Boleh Kosong !')
          .custom(user => {
            return User.findOne({ where: { username: user } }).then(result => {
              if (result) {
                return Promise.reject('Username Already In Use');
              }
            })
          }),
        check('password')
          .isLength({ min: 5 }).not().withMessage('Password Minimal 5 Karakter !')
          .notEmpty().withMessage('Password tidak boleh kosong !'),
      ]
    }
  }
}