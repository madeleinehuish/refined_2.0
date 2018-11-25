'use strict';

const bcrypt = require('bcrypt');
const boom = require('boom');
const express = require('express');
const jwt = require('jsonwebtoken');
const jwt_s = require('jwt-simple');
const knex = require('../knex');
const { camelizeKeys } = require('humps');
// const bodyParser = require('body-parser');

// const postmark = require('postmark');

// eslint-disable-next-line new-cap
const router = express.Router();

function tokenForUser(user) {
	const timestamp = new Date().getTime();
	console.log('user: ', user);
	return jwt_s.encode({ sub: user.id, iat: timestamp }, process.env.JWT_SECRET);
}

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
  console.log('req.body in api-token: ',req.body);

  if (!email || !email.trim()) {
    return next(boom.create(400, 'Email must not be blank'));
  }

  if (!password || password.length < 8) {
    return next(boom.create(400, 'Password must not be blank'));
  }

  let user;

  knex('users')
    .where('email', email)
    .first()
    .then((row) => {
      if (!row) {
        throw boom.create(400, 'Bad email or password');
      }

      user = camelizeKeys(row);
      console.log('made it into first then...**********************');
      console.log('user: ', user);

      return bcrypt.compare(password, user.hashedPassword, (err, res) => {
        console.log('inside of bcrypt compare function. res: ', res);
        if(err) {
          console.log('bcrypt compare async function error: ', err);
        }
        return res
      });

    })
    .then(() => {
      console.log('made it into next then');
      // if(!match) res.send('bad email or password');

      delete user.hashedPassword;

      const expiry = new Date(Date.now() + 1000 * 60 * 60 * 3); // 3 hours
      // const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      //   expiresIn: '3h'
      // });

      // console.log('token: ', token);
      // console.log('res keys: ', Object.keys(res));
      // console.log('res.req.headers.cookie: ', res.req.headers.cookie);
      // if(!res.req.headers.cookie) {

			const token = tokenForUser(user);
			res.cookie('accessToken', token, {
        httpOnly: true,
        expires: expiry
        // ,
        // secure: router.get('env') === 'production'
      });

			// user.token = tokenForUser(user)
			console.log('user to send: ', user);
      res.send(user);

      // res.send(user);
    })

    .catch((err) => {
      console.log('made it into catch statement');
      next(err);
    });
});

router.delete('/api-token', (req, res) => {
  res.clearCookie('token');
  res.send(true);
});

module.exports = router;
