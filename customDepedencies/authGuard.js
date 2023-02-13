let connexionModel= require('../models/companies.js')              

let authGuard = async(req,res,next)=>{              
    let company = await connexionModel.findOne({mail: req.session.companyMail})
    if (company) {
        next()
    }else{
        res.redirect('/connexion')
    }
}

module.exports = authGuard