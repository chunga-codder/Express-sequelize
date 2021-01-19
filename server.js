const express = require('express');
const db = require('./models')
const routers = require('./routs');


const app = express();

app.use(routers);

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: 'true'}));


db.sequelize.async()
.then(()=>{
    app.listen(PORT, ()=>{
        console.log(`server connected to ${PORT}`)
    })
})