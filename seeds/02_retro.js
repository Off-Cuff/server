


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE retro CASCADE; ALTER SEQUENCE retro_id_seq restart with 1')
    .then(function () {
      // Inserts seed entries

      return knex('retro').insert([
        {
          start:"making eye contact, leaning on the wall",
          stop:"saying um and uh, looking down",
          continue:"speaking clearly"
        },
        {
          start:"practicing before hand, making concise slides",
          stop:"saying um and uh, reading from the slides",
          continue:"owning the space"
        },
        {
          start:"engaging the audience, breathing",
          stop:"staring at the slides",
          continue:"smiling"
        },
        {
          start:"practicing before hand, make concise slides",
          stop:"cursing, reading from the slides",
          continue:"owning the space"
        },
        {
          start:"practice, making concise slides",
          stop:"saying shit, reading from the slides",
          continue:"owning the crowd"
        }
      ]);
    });
};
