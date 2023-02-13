const express = require("express");
const employeeModel = require('../models/employees.js');
const updateRouter = express.Router();
const authGuard = require('../customDepedencies/authGuard.js');
const upload = require("../customDepedencies/multer.js");

updateRouter.get('/update/:id', authGuard ,async (req, res) =>{
   try {
      let employee = await employeeModel.findOne({_id: req.params.id})
      res.render('template/update.twig', {
         employee: employee
      })
   } catch (err) {
      res.send(err)
   }
})

updateRouter.post('/update/:id', upload.single("photo") ,async (req, res) => {
   try {
      if (req.file) {
         req.body.photo = req.file.filename
      }
      let test = await employeeModel.updateOne({ _id: req.params.id}, req.body);
      res.redirect('/main')
   } catch (err) {
      res.send(err);
   }
})

module.exports = updateRouter;