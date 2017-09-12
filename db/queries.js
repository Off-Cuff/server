const knex = require('./knex');
const moment = require('moment');

module.exports = {
  getHostById(id) {
    return knex('host').where('id', id).first()
  }
}
