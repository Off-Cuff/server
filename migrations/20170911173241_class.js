exports.up = function(knex, Promise) {
  return knex.schema.createTable('class', (table) => {
    table.increments('id').primary();
    table.text('title').notNullable();
    table.integer('host_id').unsigned();
    table.foreign('host_id').references('host.id');
    table.integer('retro_id').unsigned();
    table.foreign('retro_id').references('retro.id');

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('class');
};
