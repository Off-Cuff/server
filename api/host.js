const express = require('express');

const router = express.Router();

const queries = require('../db/queries')

router.get('/:id', (req, res) => {
  queries.getHostById(req.params.id).then( host =>{
    res.json(host)
  })
})

router.post(':id/create-host', (req, res, next) =>{
  queries.createHost(req.body).then(result =>{
    console.log(req.body);
    res.send(result);
  })
})

router.post('/create-class', (req, res, next) =>{
  queries.createClass(req.body).then(result =>{
    console.log(req.body);
    res.send(result);
  })
})

router.post('/create-session', (req, res, next) =>{
  queries.createSession(req.body).then(result =>{
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

router.get('/class/sessions/:class_id', (req, res) => {
  console.log('here: ', req.params.class_id);
  queries.getSessionByClassId(req.params.class_id).then(sessions => {
    res.json(sessions)
  })
})

router.delete('/:id', (req,res) =>{
  console.log(req.body);
  console.log(req.params.id);
  queries.deletClass(req.params.id).then(aClass => {
    res.json(aClass)
    console.log('delete');
  })
})




module.exports = router;
