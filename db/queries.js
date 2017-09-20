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
    return knex('host')
      .join('class', 'host.id', '=', 'class.host_id')
      .select('class.title', 'class.retro_id', 'class.id')
      .where('class.host_id', host_id)
  },
  getClassById(id){
    return knex('class').where('id', id)
  },
  getSessionByClassId(class_id){
    return knex('class')
      .join('session', 'class.id', '=', 'session.class_id')
      .select('session.title', 'session.class_id')
      .where('session.class_id', class_id)
  },
  getAllSessionsByClassId(host_id, class_id){
    return knex('session').where('class_id', class_id)
  },
  createClass(createdClass){
    return knex('class').insert(createdClass).returning('*')
  },
  createSession(createdSession){
    return knex('session').insert(createdSession).returning('*')
  },
  deletClass(id){
    return knex('class').where('id', id).del()
  }
}
