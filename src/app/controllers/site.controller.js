const express= require('express');
const mydata =  require('../models/mydata');
class Sitecontroller{
    async home(req, res, next){
        await mydata.find({})
            .lean()
            .then(mydatas =>res.render('home',{
                mydatas :mydatas
            }))
            .catch(next)
    }
    // search(req,res,next){
    //     res.render('search')
    // }
}

module.exports = new Sitecontroller