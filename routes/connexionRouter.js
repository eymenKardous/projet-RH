const express = require("express");
const connexionModel = require('../models/companies.js');
const connexionRouter = express.Router();
let crypto = require('../customDepedencies/crypto.js');
const companyModel = require("../models/companies.js");
const session = require('express-session')

connexionRouter.get('/connexion', async(req, res) =>{
    try {
        res.render('template/login.twig')
    } catch (err) {
        res.send(err)
    }
});

connexionRouter.post('/connected', async(req, res) =>{
    try {
        let company = await companyModel.findOne({mail: req.body.mail})
        if (company) {
            if (await crypto.comparePassword(req.body.password, company.password)) {
                req.session.companyId = company._id
                req.session.companyMail = company.mail
                res.redirect('/main')
            }else{
                res.redirect('/connexion')
            }
        }else{
            res.redirect('/connexion')
        }
    } catch (err) {
        res.send(err)
        res.redirect('/register')
    }
})

connexionRouter.get('/disconnect', async(req,res)=>{
    try{
        req.session.destroy()
        res.render('template/login.twig')

    }catch(err){
    res.send(err)
    }
})


module.exports = connexionRouter

