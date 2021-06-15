if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var bcrypt = require('bcrypt');
var session = require('express-session');
/* Redis */
const RedisStore = require('connect-redis')(session);
var redis = require('redis');

var passport = require('passport');

/* Path Include */
require('./config/passport_config')(passport);
var configDB = require('./config/db');
var Mysql = require('./config/mysql');
/* End Path Include */


/* ADD ROUTER */
var ApiRouter = require('./routes/api');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


//=============================================== Custom Configuration =========================================
//============================ Redis Settings ===============================
const redisClient = redis.createClient(configDB.redis.options);
redisClient.on('ready', () => {
  console.log('Successfully connected to Redis.')
});
configDB.redis.client = redisClient;
//============================ End Redis Settings ===============================
//=============================================== Mysql  =========================================
Mysql.authenticate().then(() => {
  console.log("SQL Database Connect !")
});
//===============================================end  Mysql  =========================================
/* Custom use package */
//express-session config
app.use(session({
  store: new RedisStore({ client: configDB.redis.client }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}))
/* passport Config */
app.use(passport.initialize());
app.use(passport.session());



/* use Package */
app.use(cors({
  origin: "http://localhost:3000", // <-- React Location
  credentials: true,
})
);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api', ApiRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
