/* Model Require */
const UserModel = require('../models/userModels');
/* End Model Require */

/* Require Any Config */
var bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const passport = require('passport');
const userModels = require('../models/userModels');
/* End  Require Any Config */

/* Login Method */
exports.Login = async (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err
    if (!user) res.send("User Tidak Ditemukan !")
    else {
      req.logIn(user, (err) => {
        if (err) throw err
        res.status(200).send({ message: "User Authenticated !", res: user })
        console.log(req.user)
      });
    }
  })(req, res, next);
}
/* End Login Method */

// exports.Login = async (req, res) => {
//   const userName = req.query.username
//   const pass = req.query.password
//   UserModel.findOne({ where: { username: userName } }).then(user => {
//     if (!user) {
//       res.status(500).send({ message: `Tidak Dapat Menemukan username ! ` })
//     } else {

//       bcrypt.compare(pass, user.password, (err, isMatch) => {
//         if (err) {
//           res.status(403).send({ messsage: `You do not allow`, error: err.message })
//         } else {
//           if (isMatch) {
//             res.status(200).send({ message: `Success Authenticate`, data: user })
//           } else {
//             res.status(500).send({ message: `Password Tidak Sama !` })
//           }
//         }
//       });
//     }
//   })
// }



/* GET Data user */
exports.GetAllUsers = async (req, res) => {
  const user = req.user;
  if (user) {
    UserModel.findAll({})
      .then(results => {
        res.status(200).send({ data: results, Auth: user })
      })
  } else {
    res.status(403).send({ message: `Forbidden You Do Not Allowed !`, redirect: `/login` })
  }
}
/* End GET Data User */

/* Delete User Data */
exports.DeleteUser = async (req, res) => {
  const user = req.user
  // if (user) {
  const idUser = req.body.idUser;
  await UserModel.destroy({ where: { id: idUser } }).then(response => {
    if (response.role == 'admin') {
      res.status(500).send({ message: `Anda tidak dapat menhapus ${response.role}`, auth: user })
    }
    res.status(200).send({ message: `User Berhasil Di Hapus !` })
  })
  // } else {
  // res.status(403).send({ message: `Forbidden You Do Not Allowed !`, redirect: `/login` })
  // }
}
/* End Delete User */

/* Find User By username */
exports.GetUser = async (req, res) => {
  const userName = req.params.userName
  const user = req.user;
  // if (user) {
  UserModel.findOne({ where: { username: userName } })
    .then(result => {
      res.status(200).send({ data: result })
    }).catch(err => {
      res.status(500).send({ message: `Cannot Find Data ${err.message}` })
    })
  // } else {
  // res.status(403).send({ message: `Forbidden You Do Not Allowed !`, redirect: `/login` })
  // }
}
/* End Find User By username */



/* create new user API */
exports.createNewUser = async (req, res) => {
  const { username, password, role } = req.body;
  const passwordHashed = await bcrypt.hash(password, 10);
  userModels.findOne({
    where: {
      username: username
    }
  }).then(user => {
    if (user) {
      res.status(405).send({ message: `Username has been Register !` });
    } else {
      const Register = new UserModel({
        username: username,
        password: passwordHashed,
        role: role
      });
      Register.save()
        .then(results => {
          res.status(200).send({ message: `Successfuly Added New User ${results.username} !`, data: results });
        }).catch(err => {
          res.status(500).send({ message: `Error Code ${err.message}` })
        })
    }
  })
}
/* End create new user API */



/* Uodate user  */
exports.updateUser = async (req, res) => {
  const errors = validationResult(req);
  const id = req.params.id
  const { username, password, role } = req.body;
  if (!errors.isEmpty()) {
    const alert = errors.array();
    res.status(500).send({ message: alert });
  } else {
    const passwordHashed = await bcrypt.hash(password, 10);
    await UserModel.update({
      username: username,
      password: passwordHashed,
      role: role
    }, {
      where: {
        id: id
      }
    }).then(result => {
      res.status(200).send({ message: `Successfull Update User Data ${result.username}`, data: { result } })
    }).catch(err => {
      res.status(500).send({ message: `Cannot Update User Data ${err.message}` })
    })
  }
}

/* End Uodate user  */
