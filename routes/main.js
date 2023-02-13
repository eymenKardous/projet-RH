const express = require("express");
const employeeModel = require('../models/employees.js');
const upload = require ("../customDepedencies/multer")
const mainRouter = express.Router();
const authGuard = require('../customDepedencies/authGuard.js');
const companyModel = require("../models/companies.js");


mainRouter.get('/main', authGuard, async (req, res) =>{
    try {
        let company
        if (req.query.search) {
             company = await companyModel.findOne({_id: req.session.companyId}).populate({
                path:'employees',
                match: {'name': {$regex:  new RegExp(`\^${req.query.search}`,"i")}}
               })
        }else{
             company = await companyModel.findOne({_id: req.session.companyId}).populate('employees')

        }
        res.render('template/main.twig',{
        employees: company.employees,
        companyName: company.name
        })
    } catch (err) {
        console.log(err);
        res.send(err)
    }
})

module.exports = mainRouter