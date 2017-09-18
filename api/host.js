const express = require('express');

const router = express.Router();

const queries = require('../db/queries')

router.get('/:id', (req, res) => {
  queries.getHostById(req.params.id).then( host =>{
    res.json(host)
  })
})

router.post('/create-host', (req, res, next) =>{
  queries.createHost(req.body).then(result =>{
    console.log(req.body);
    res.send(result);
  })
})

router.get('/:id/classes', (req,res) =>{
  console.log('made it to th :id/classes route');
  queries.getAllClassesByHostId(req.params.id).then(classes=>{
    res.json(classes)
  })
})

router.get('/class/:id', (req,res) =>{
  queries.getClassById(req.params.id).then(aClass => {
    res.json(aClass)
  })
})

// router.get('/:host_id/class/:class_id', (req, res) =>{
//   queries.getAllSessionsByClassId(req.params.host_id, req.params.class_id).then(sessions=>{
//     console.log(sessions);
//     res.json(sessions)
//   })
// })



module.exports = router;
