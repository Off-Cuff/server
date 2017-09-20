
exports.up = function(knex, Promise) {
  return knex.schema.createTable('host', (table) => {
    table.increments('id').primary();
    table.text('name').notNullable();
    table.text('email').notNullable();
    table.text('password').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('host');
};
