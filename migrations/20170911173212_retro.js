exports.up = function(knex, Promise) {
  return knex.schema.createTable('retro', (table) => {
    table.increments('id').primary();
    table.text('start').notNullable();
    table.text('continue').notNullable();
    table.text('stop').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('retro');
};
