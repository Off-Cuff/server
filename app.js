const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken')
const auth = require('./auth')
const authMiddleware = require('./auth/middleware.js')
const host = require('./api/host.js')
//const auth = require('./auth');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(authMiddleware.checkTokenSetUser)
app.use('/api/v1/host', host);
app.use('/auth', auth);
app.use('/api/v1/host', host);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get('env') === 'production' ? {} : err.stack
    //could also be
    //stack: process.env.NODE_ENV == 'development' ? err.stack : {}
  });
});

module.exports = app;
