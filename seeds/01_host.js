const bcrypt = require('bcrypt');
const saltRounds = 10;


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE host CASCADE; ALTER SEQUENCE host_id_seq restart with 1')
    .then(function () {
      // Inserts seed entries
      const salt = bcrypt.genSaltSync(saltRounds);

      return knex('host').insert([
        {
          name: 'Austin',
          email:'austin@austin.com',
          password:bcrypt.hashSync('Austin', salt)
        },{
          name:'Taylor',
          email:'Taylor@taylor.com',
          password:bcrypt.hashSync('Taylor', salt)
        },{
          name: 'Kelly',
          email:'Kelly@kelly.com',
          password:bcrypt.hashSync('Kelly', salt)
        }
      ]);
    });
};
