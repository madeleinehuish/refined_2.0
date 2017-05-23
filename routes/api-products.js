'use strict';
const boom = require('boom');
const express = require('express');
const knex = require('../knex');
const { camelizeKeys } = require('humps');

// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/api-products', (_req, res, next) => {
  knex('products')
    .orderBy('name')
    .then((rows) => {
      const products = camelizeKeys(rows);

      res.send(products);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/api-products/:id', (req, res, next) => {
  const id = Number.parseInt(req.params.id);

  if (Number.isNaN(id)) {
    return next();
  }
  knex('products')
    .where('id', id)
    .first()
    .then((row) => {
      if (!row) {
        throw boom.create(404, 'Not Found');
      }
      const product = camelizeKeys(row);

      res.send(product);
    })
    .catch((err) => {
      next(err);
    });
});
module.exports = router;
