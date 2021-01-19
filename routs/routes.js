const express = require('express');
const db = require('../models');

const routers = express.routers();

routers.get('./all',(req,res)=>{
 db.todoes.findAll().then((toedoes)=>{
     res.send(todoes)
 })
});

module.exports = routers;