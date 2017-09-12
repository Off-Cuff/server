exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE session CASCADE; ALTER SEQUENCE session_id_seq restart with 1')
    .then(function () {
      // Inserts seed entries

      return knex('session').insert([
        {
          title: "week1",
          pic_quantity:"3",
          pic_duration:"30",
          class_id: 1
        },
        {
          title: "week2",
          pic_quantity:"3",
          pic_duration:"30",
          class_id: 1
        },
        {
          title: "week3",
          pic_quantity:"3",
          pic_duration:"30",
          class_id: 2
        },
        {
          title: "week4",
          pic_quantity:"3",
          pic_duration:"30",
          class_id: 2
        },
        {
          title: "extra credit",
          pic_quantity:"3",
          pic_duration:"30",
          class_id: 2
        },
        {
          title: "extra credit",
          pic_quantity:"5",
          pic_duration:"60",
          class_id: 3
        }
      ]);
    });
};
