


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE class CASCADE; ALTER SEQUENCE class_id_seq restart with 1')
    .then(function () {
      // Inserts seed entries

      return knex('class').insert([
        {
          title:"p1",
          host_id: 1,
          retro_id: 1
        },
        {
          title:"p11",
          host_id: 1,
          retro_id: 4
        },
        {
          title:"p2",
          host_id: 2,
          retro_id: 2
        },
        {
          title:"p22",
          host_id: 2,
          retro_id: 5
        },
        {
          title:"p3",
          host_id: 3,
          retro_id: 3
        }
      ]);
    });
};
