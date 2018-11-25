'use strict';

const bcrypt = require('bcrypt');
const boom = require('boom');
const express = require('express');
const jwt = require('jsonwebtoken');
const jwt_s = require('jwt-simple');
const knex = require('../knex');
const { camelizeKeys, decamelizeKeys } = require('humps');

// eslint-disable-next-line new-cap
const router = express.Router();

const authorize = function(req, res, next) {
  const token = req.cookies.token;

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return next(boom.create(401, 'Unauthorized'));
    }
    req.token = decoded;
    next();
  });
};

function tokenForUser(user) {
	const timestamp = new Date().getTime();
	console.log('user: ', user);
	return jwt_s.encode({ sub: user.id, iat: timestamp }, process.env.JWT_SECRET);
}

router.get('/api-users', authorize, (req, res, next) => {
  knex('users')
    .where('id', req.token.userId)
    .then((rows) => {
      const user = camelizeKeys(rows[0]);

      delete user.hashedPassword;
      res.send(user);
    })
    .catch((err) => {
      next(err);
    });
});

// async function createHash(password) {
//
//     const hashedPassword = await bcrypt.hash(password, 12, (err, hash) => {
//       if(err) {
//         return ('hash error: ', err);
//       }
//       console.log('hash inside of bcrypt callback: ', hash);
//       return hash;
//
//     });
//
//     return hashedPassword;
// }

router.post('/api-users', (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !email.trim()) {
    return next(boom.create(400, 'Email must not be blank'));
  }
  if (!password || password.length < 8) {
    return next(boom.create(
      400,
      'Password must be at least 8 characters long'
    ));
  }

  knex('users')
    // .select(knex.raw('1=1'))
    .where('email', email)
    .first()
    .then((exists) => {
      console.log('exists: ', exists);
      console.log('email: ', email, ' password: ', password);
      console.log('made it into knex post new user');
      if (exists) {
        throw boom.create(400, 'Email already exists');
      }

      return new Promise((resolve, reject) => {
        // const hashedPassword = createHash(password);
        bcrypt.hash(password, 12, (err, hash) => {
          if(err) {
            reject('hash error: ', err);
          }
          console.log('hash inside of bcrypt callback: ', hash);
          resolve(hash) ;
        });

      })

    })
    .then((hashedPassword) => {
      console.log('made it into hashedpassword');
      console.log('hashedPassword: ', hashedPassword);
      const { firstName, lastName } = req.body;
      const insertUser = { firstName, lastName, email, hashedPassword };

      return knex('users')
        .insert(decamelizeKeys(insertUser), '*');
    })
    .then((rows) => {
      console.log('made it into third then statement.');
      console.log('rows[0]: ', rows[0]);
      const user = camelizeKeys(rows[0]);
      console.log('user: ', user);
      console.log('hashedPassword in third then: ', user.hashedPassword);

      delete user.hashedPassword;
      // const expiry = new Date(Date.now() + 1000 * 60 * 60 * 3); // 3 hours
      // const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { //***
      //   expiresIn: '3h'
      // });

      // console.log('token: ', token);
      //
      // res.cookie('accessToken', token, {
      //   httpOnly: true,
      //   expires: expiry
      //   // ,
      //   // secure: router.get('env') === 'production'
      // });
      // res.send(user);  //***
      user.token = tokenForUser(user)
      res.send(user);

    })
    .catch((err) => {
      next(err);
    });
});

router.patch('/api-users/:id', (req, res, next) => {
  const id = Number.parseInt(req.params.id);

  if (Number.isNaN(id)) {
    return next();
  }
  const updateUser = {};

  knex('users')
    .where('id', id)
    .first()
    .then((user) => {
      if (!user) {
        throw boom.create(404, 'Not Found');
      }
      const { firstName, lastName, email, password } = req.body;

      if (firstName) {
        updateUser.firstName = firstName;
      }
      if (lastName) {
        updateUser.lastName = lastName;
      }
      if (email) {
        updateUser.email = email;
      }
      if (password) {
        if (password.length < 8) {
          const message = 'Password must be at least 8 characters long';

          return next(boom.create(400, message));
        }

        return bcrypt.hash(password, 12)
        .then((hashedPassword) => {
          updateUser.hashedPassword = hashedPassword;

          return knex('users')
            .where('id', id)
            .update(decamelizeKeys(updateUser), '*');
        })
        .catch((err) => {
          throw err;
        });
      }

      return knex('users')
        .where('id', id)
        .update(decamelizeKeys(updateUser), '*');
    })
    .then((rows) => {
      const user = camelizeKeys(rows[0]);

      delete user.hashedPassword;
      const expiry = new Date(Date.now() + 1000 * 60 * 60 * 3); // 3 hours
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
        expiresIn: '3h'
      });

      res.cookie('accessToken', token, {
        httpOnly: true,
        expires: expiry,
        secure: router.get('env') === 'production'
      });
      res.send(user);
    })
    .catch((err) => {
      next(err);
    });
});
module.exports = router;
