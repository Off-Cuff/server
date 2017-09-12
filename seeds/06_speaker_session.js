exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE speaker_session CASCADE; ALTER SEQUENCE speaker_session_id_seq restart with 1')
    .then(function () {
      // Inserts seed entries

      return knex('speaker_session').insert([
        {
          speaker_id: 1,
          session_id: 1
        },
        {
          speaker_id: 1,
          session_id: 1
        },
        {
          speaker_id: 2,
          session_id: 2
        },
        {
          speaker_id: 3,
          session_id: 3
        },
        {
          speaker_id: 3,
          session_id: 3
        },
        {
          speaker_id: 2,
          session_id: 2
        }
      ]);
    });
};
