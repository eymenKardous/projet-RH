const express = require("express");
const employeeModel = require('../models/employees.js');
const addBlameRouter = express.Router();
const authGuard = require('../customDepedencies/authGuard.js');
const { updateOne } = require("../models/employees.js");




addBlameRouter.get('/addBlame/:id', authGuard ,async (req, res) =>{
   try {
      let employee = await employeeModel.findOne({_id: req.params.id})
      employee.blame++
         if (employee.blame > 3) {
            res.redirect('/delete/' + req.params.id)
         }else{
            let test = await employeeModel.updateOne({ _id: req.params.id}, {blame : employee.blame++})
            res.redirect('/main')
         }
   } catch (err) {
      res.send(err)
   }
})

module.exports = addBlameRouter;

