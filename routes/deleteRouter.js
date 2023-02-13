const express = require("express");
const employeeModel = require('../models/employees.js');
const deleteRouter = express.Router();
const companyModel = require('../models/companies.js')



deleteRouter.get('/delete/:id', async (req, res) => {
   try {
         await employeeModel.deleteOne({ _id: req.params.id });
         await companyModel.updateOne({_id: req.session.companyId}, {$pull: {employees: req.params.id}})
          res.redirect('/main')
       } catch (err) {
         console.log(err);
          res.send(err);
         }
         
      })

      module.exports = deleteRouter;
      
      

