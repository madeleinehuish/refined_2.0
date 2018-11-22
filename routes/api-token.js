'use strict';

const bcrypt = require('bcrypt-nodejs');
const boom = require('boom');
const express = require('express');
const jwt = require('jsonwebtoken');
const knex = require('../knex');
const { camelizeKeys } = require('humps');
// const bodyParser = require('body-parser');

// const postmark = require('postmark');

// eslint-disable-next-line new-cap
const router = express.Router();

// router.use(bodyParser.json());

router.get('/api-token', (req, res) => {
  const token = req.cookies.token;

// eslint-disable-next-line no-unused-vars
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.send(false);
    }

    res.send(true);
  });
});

router.post('/api-token', (req, res, next) => {
  const { email, password } = req.body;
  // console.log('req in api-token: ', req);
  console.log('req.body in api-token: ',req.body);

  // if(err) {
  //   console.log('err: ', err);
  // }

  if (!email || !email.trim()) {
    return next(boom.create(400, 'Email must not be blank'));
  }

  if (!password || password.length < 8) {
    return next(boom.create(400, 'Password must not be blank'));
  }

  let user;

  // const client = new postmark.Client('b2a5c213-b95c-417f-bf81-11e9525f603f');

  // eslint-disable-next-line max-len
  // const message = 'test';

  // client.sendEmail({
  //   'From': 'screamqueen@kenmcgrady.com',
  //   'To': email,
  //   'Subject': 'Boo! Welcome to Scream Queen!',
  //   'TextBody': message
  // });

  knex('users')
    .where('email', email)
    // .then(res => {
    //   console.log('made it after where...*****************');
    //   console.log('email: ', email);
    //   return res;
    // })
    .first()
    .then((row) => {
      if (!row) {
        throw boom.create(400, 'Bad email or password');
      }

      user = camelizeKeys(row);
      console.log('made it into first then...**********************');
      return bcrypt.compare(password, user.hashedPassword);
    })
    .then(() => {
      delete user.hashedPassword;

      const expiry = new Date(Date.now() + 1000 * 60 * 60 * 3); // 3 hours
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
        expiresIn: '3h'
      });

      res.cookie('token', token, {
        httpOnly: true,
        expires: expiry,
        secure: router.get('env') === 'production'
      });

      res.send(user);
    })
    .catch(bcrypt.MISMATCH_ERROR, () => {
      throw boom.create(400, 'Bad email or password, mismatch error');
    })
    .catch((err) => {
      next(err);
    });
});

router.delete('/api-token', (req, res) => {
  res.clearCookie('token');
  res.send(true);
});

module.exports = router;
