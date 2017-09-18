const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const router = express.Router();
const Host = require('../db/queries')

require('dotenv').config();

router.get('/', (req, res) => {
  res.json({
    message: '🔐'
  })
})

function validateUser(Host) {
  console.log('Host: ', Host);
  console.log('Host.email: ', Host.email);
  console.log('Host.password: ', Host.password);
  const validEmail = typeof Host.email == 'string' &&
    Host.email.trim() != '';
  const validPassword = typeof Host.password == 'string' &&
    Host.password.trim() != '' &&
    Host.password.trim().length <= 4;
    console.log('email', validEmail);
    console.log('password', validPassword);

  return validEmail;
}


router.post('/signup', (req, res, next) => {
  if (validateUser(req.body)) {
    Host
      .getUserByEmail(req.body.email)
      .then(host => {
        // console.log('host', host);
        if (!host) {

          bcrypt.hash(req.body.password, 10)
            .then((hash) => {
              console.log(hash);
              const host = {
                name: req.body.name,
                email: req.body.email,
                password: hash
              }

              Host
                .createHost(host)
                .then(id => {
                  jwt.sign({
                    id: host.id
                  }, process.env.TOKEN_SECRET, {
                    expiresIn: '1hr'
                  }, (err, token) => {
                    console.log('err', err);
                    console.log('token', token);
                    res.json({
                      host,
                      id,
                      token,
                      message: 'ok'
                    });
                    console.log(token);
                    console.log(host);
                  });
                })
            })
        } else {
          next(new Error('Invalid Host'))
        }
      })
  } else {
    next(new Error('Login: Invalid Password or Email'))
  }
})

router.post('/login', (req, res, next) => {
  if (validateUser(req.body)) {
    console.log('validateUser')
    console.log('req.body: ', req.body);
    console.log(req.body.email);
    Host
      .getUserByEmail(req.body.email)
      .then(host => {
        console.log('host', host); // undefined
        if (host) {
          console.log(req.body.password);
          console.log(host.password);
          bcrypt.compare(req.body.password, host.password)
            .then((id) => {
              console.log(id);
              if (id) {
                console.log(process.env.TOKEN_SECRET);
                jwt.sign({
                    id: host.id
                  },
                  process.env.TOKEN_SECRET, {expiresIn: '1hr'},(err, token) => {
                    console.log('err', err);
                    console.log('token', token);
                    res.json({
                      host,
                      id,
                      token,
                      message: 'ok'
                    });
                    alert('Sign-up Successful!')
                  });
              } else {
                console.log('id if failed');
                next(new Error('Invalid user'))
              }
            }).catch(function(error){
              console.log(error);
            })
          } else {
            console.log('host if failed');
            next( new Error('Invalid user'))
          }
        }).catch(function(error){
          console.log(error);
        })
  } else {
    console.log('valid user failed');
    next( new Error('Login: Invalid Password or Email'))
  }
});









module.exports = router;
