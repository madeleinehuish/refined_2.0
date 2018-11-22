'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/refined_2'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
