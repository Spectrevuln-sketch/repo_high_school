var express = require('express');
var router = express.Router();
var UserController = require('../controllers/User');
var Validate = require('../config/validation');
var passport = require('passport');
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

/* Login Method */
router.post('/login_auth', UserController.Login);
/* get all data user */
router.get('/users_data', UserController.GetAllUsers);
/* End get all data user */

/* get One User */
router.get('/findUser/:userName', UserController.GetUser);
/* End get One User */

/* Delete Data User */
router.delete('/delete_user', UserController.DeleteUser);
/* End Delete Data User */

/* Register Process */
router.post('/register', UserController.createNewUser);
/* End Register Process */

/* Update User */
router.put('/update_user/:id', UserController.updateUser);
/* End Update User */

module.exports = router;
