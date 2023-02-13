const express = require("express");
const employeeModel = require('../models/employees.js');
const upload = require ("../customDepedencies/multer")
const addEmployeeRouter = express.Router();
const authGuard = require('../customDepedencies/authGuard.js');
const companyModel = require("../models/companies.js");

addEmployeeRouter.get('/add', authGuard ,async (req, res) =>{
    try {
        res.render('template/addEmployee.twig')
    } catch (err) {
        res.send(err)
    }
})

addEmployeeRouter.post('/added', upload.single("photo"), async (req, res) =>{
    try {
        if (req.file) {
            req.body.photo = req.file.filename
        }
        let employee = new employeeModel(req.body)
        employee.save()
        await companyModel.updateOne({_id: req.session.companyId}, {$push: {employees: employee._id}})
        res.redirect('/main')
    } catch (err) {
        res.send(err)
    }
})

module.exports = addEmployeeRouter
