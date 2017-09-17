const knex = require('./knex');
const moment = require('moment');

module.exports = {
  getHostById(id) {
    return knex('host').where('id', id).first()
  },
  getUserByEmail(email) {
    return knex('host').where('email', email).first();
  },
  createHost(host){
    return knex('host').insert(host).returning('*')
  },
  getAllClassesByHostId(host_id){
    return knex('class').where('host_id', host_id);
  },
  getClassById(id){
    return knex('class').where('id', id)
  },
  getAllSessionsByClassId(host_id, class_id){
    return knex('session').where('class_id', class_id)
  }
}
