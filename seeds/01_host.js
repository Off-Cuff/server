const bcrypt = require('bcrypt');
const saltRounds = 10;


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE host CASCADE')
    .then(function () {
      // Inserts seed entries
      const salt = bcrypt.genSaltSync(saltRounds);

      return knex('host').insert([
        {
          name: 'Austin',
          email:'Austin@gmail.com',
          password:bcrypt.hashSync('usa20034', salt)
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
