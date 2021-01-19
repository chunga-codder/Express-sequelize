const { text } = require('body-parser');
const express = require('express');
const db = require('../models');

const routers = express.routers();

// getting some data from the database (db)
routers.get('./all', (req,res)=>{
  db.todoes.findAll().then((data)=>{
    res.send(data)

  })
  .catch((err,data)=>{
      res.send(err)
  
  });

});

//posting some data from the database(db)

routers.post('/new',(req,res)=>{
   db.todoes.create({
       text: req.body.text
   })
   .then((text)=>{
     res.send(text)
   }).catch((err)=>{
       console.log(err)
   });
   
});


//getting data from the data base using the id

routers.get('/all/:id',(req,res)=>{
  db.todoes.find({
      id: req.params.id
  }).then((data)=>{
      res.send(data)
  }).catch((err)=>{
      console.log(err)
  });

});


// deleting data from the table todoes

routers.delete('/delete/:id',(req,res)=>{
    db.todoes.destroy({
        text:req.body.text
    },{
        id: req.body,id
    }).then(()=>{
        res.send('deleted')
    })
    .catch((err)=>{
        console.log(err)
    })
});

module.exports = routers;