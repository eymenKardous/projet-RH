const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const session = require('express-session')

const registerRouter = require('./routes/registerRouter.js');
const connexionRouter = require('./routes/connexionRouter.js')
const addEmployeeRouter = require('./routes/addEmployeeRouter.js')
const mainRouter = require('./routes/main.js')
const updateRouter = require('./routes/updateRouter.js')
const deleteRouter = require('./routes/deleteRouter.js')
const addBlameRouter = require('./routes/addBlameRouter.js')

const db = process.env.BDD_URL
const app = express();

app.use(express.urlencoded({extended: true}))   //Décoder les formulaires
app.use(session({secret: "azerty",saveUninitialized: true,resave: true}));

app.use(express.static('./assets')); 
app.use(express.json());

app.use(registerRouter);
app.use(connexionRouter);
app.use(addEmployeeRouter)
app.use(mainRouter)
app.use(updateRouter)
app.use(deleteRouter)
app.use(addBlameRouter)

app.listen(5326,(err)=>{
    if (err) {
       console.log(err); 
    }else{
        console.log('Je suis connecté');
    }
})

mongoose.set('strictQuery', false);
mongoose.connect(db,(err)=>{
    if (err) {
        console.log(err);
    }else{
        console.log("connecté a la bdd");
    }
})