exports.up = function(knex, Promise) {
  return knex.schema.createTable('speaker_session', (table) => {
    table.increments('id').primary();
    table.integer('speaker_id').unsigned();
    table.foreign('speaker_id').references('speaker.id');
    table.integer('session_id').unsigned();
    table.foreign('session_id').references('session.id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('speaker_session');
};
