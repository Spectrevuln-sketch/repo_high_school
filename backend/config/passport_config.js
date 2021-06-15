const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt');


/* Load Models User */
const User = require('../models/userModels');
/* End Load Models User */

module.exports = function (passport) {
  passport.use(
    new LocalStrategy({ usernameField: 'username', passwordField: 'password' }, (username, password, done) => {
      /* Match User */
      User.findOne({
        where: {
          username: username
        }
      }).then(user => {
        if (!user) {
          return done(null, false, { message: 'Username Is Not Register !' })
        }
        /* Match Password */
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            return done(null, user)
          } else {
            return done(null, false, { message: 'Wrong Password !' })
          }
        });
      });
    })
  )
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    User.findOne({ where: { id: id } })
      .then(user => {
        const Userdata = {
          username: user.username
        }
        done(err, Userdata)
      }).catch(err => {
        done(null, err)
      });
  })
}