exports.up = function(knex, Promise) {
  return knex.schema.createTable('session', (table) => {
    table.increments('id').primary();
    table.text('title').notNullable();
    table.integer('pic_quantity').notNullable();
    table.integer('pic_duration').notNullable();
    table.integer('class_id').unsigned();
    table.foreign('class_id').references('class.id');

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('session');
};
