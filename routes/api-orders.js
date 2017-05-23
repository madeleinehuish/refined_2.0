'use strict';
const boom = require('boom');
const express = require('express');
const knex = require('../knex');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const stripe = require('stripe')('sk_test_j3BQvcEqnflAiAGckPRd11gN');
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

router.get('/api-orders', authorize, (_req, res, next) => {
  knex('orders')
    .orderBy('id')
    .then((rows) => {
      const orders = camelizeKeys(rows);

      res.send(orders);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/api-orders/:id', authorize, (req, res, next) => {
  const orderId = Number.parseInt(req.params.id);

  if (!Number.isInteger(orderId)) {
    return next(boom.create(400, 'Order Id must be an integer'));
  }

  let orders;

  knex('orders')
    .where('user_id', req.params.id)
    .then((row) => {
      if (!row) {
        throw boom.create(404, 'Not Found');
      }
      orders = camelizeKeys(row);
    })
    .then(() => {
      return knex('order_items')
      .innerJoin('orders', 'orders.id', 'order_items.order_id')
      .where('orders.user_id', req.params.id)
      .orderBy('ordered_at')
    })
    .then((rows) => {
      const orderItemsData = camelizeKeys(rows);
      const sortedOrderItemsprep = _.groupBy(orderItemsData, 'orderId');
      const sortedOrderItems = _.map(sortedOrderItemsprep, (value, key) => {
        return [key, value];
      });

      res.send({ orders, sortedOrderItems });
    })
    .catch((err) => {
      next(err);
    });
});

/* eslint-disable */
router.post('/api-orders', authorize, (req, res, next) => {

  const { cartItems, address1, address2, city, state, zip, chargeTotal, stripeToken } = req.body;
  const { userId } = req.token;
  const tokenStripe = req.body.stripeToken;
  const cTotal = Math.round(chargeTotal * 100);


  const charge = stripe.charges.create({
    amount: cTotal, // Amount in cents
    currency: 'usd',
    source: tokenStripe,
    description: 'Example charge'
  }, (err, charge) => {
    if (err && err.type === 'StripeCardError') {

      console.log('card error something went wrong');

      // The card has been declined
    }
  });
/* eslint-disable */

  if (!address1 || !address1.trim()) {
    return next(boom.create(400, 'Address must not be blank'));
  }

  if (!city || !city.trim()) {
    return next(boom.create(400, 'City must not be blank'));
  }

  if (!state || !state.trim()) {
    return next(boom.create(400, 'State must not be blank'));
  }

  if (!zip || !zip.trim()) {
    return next(boom.create(400, 'Zip must not be blank'));
  }

  const insertOrder = { userId, address1, address2, city, state, zip };
  let order;

  knex('orders')
    .insert(decamelizeKeys(insertOrder), '*')
    .then((rows) => {
      order = camelizeKeys(rows[0]);

      return knex('order_items')
        .insert(decamelizeKeys(cartItems.map((item) => {
          return {
            orderId: order.id,
            productsId: item.id,
            quantity: item.quantity
          };
        })));
    })
    .then(() => {
      res.send(order);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
