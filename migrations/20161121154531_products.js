'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('products', (table) => {
    table.increments();
    table.string('name').notNullable().defaultTo('');
    table.string('image').notNullable().defaultTo('');
    table.enu('rating', [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]).notNullable();
    table.decimal('price', 8, 2);
    table.text('description').notNullable().defaultTo('');
    table.string('keywords').notNullable().defaultTo('');
    table.boolean('on_sale');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('products');
};
