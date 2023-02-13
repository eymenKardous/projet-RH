const express = require("express");
const companyModel = require('../models/companies.js')
const registerRouter = express.Router()
const session = require('express-session')
let crypto = require('../customDepedencies/crypto.js')

registerRouter.get('/register', async (req, res) => {
try {
   res.render('template/register.twig')
} catch (err) {
   res.send(err);
}
});

registerRouter.post('/register', async (req, res) => { 
try {
   req.body.password = await crypto.cryptPassword(req.body.password)
   let company = new companyModel(req.body)
   company.save()
   res.send('Enregistré')
} catch (err) {
   console.log(err);
   res.send(err);
}
});

module.exports = registerRouter;