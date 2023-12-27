const express= require('express');

class Sitecontroller{
    home(req, res, next){
        res.render('home');
    }
    // search(req,res,next){
    //     res.render('search')
    // }
}

module.exports = new Sitecontroller