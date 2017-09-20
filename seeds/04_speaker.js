

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE speaker CASCADE; ALTER SEQUENCE speaker_id_seq restart with 1')
    .then(function () {
      // Inserts seed entries

      return knex('speaker').insert([
        {
          name: "jonny",
          class_id: 1
        },
        {
          name: "jimbo",
          class_id: 1
        },
        {
          name: "sammy",
          class_id: 2
        },
        {
          name: "sally",
          class_id: 2
        },
        {
          name: "swanson",
          class_id: 2
        },
        {
          name: "ronald",
          class_id: 3
        }
      ]);
    });
};
