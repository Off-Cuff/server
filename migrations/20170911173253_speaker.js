exports.up = function(knex, Promise) {
  return knex.schema.createTable('speaker', (table) => {
    table.increments('id').primary();
    table.text('name').notNullable();
    table.integer('class_id').unsigned();
    table.foreign('class_id').references('class.id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('speaker');
};
