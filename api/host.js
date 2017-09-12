const express = require('express');

const router = express.Router();

const queries = require('../db/queries')

router.get('/:id', (req, res) => {
  queries.getHostById(req.params.id).then( host =>{
    res.json(host)
  })
})

module.exports = router;
