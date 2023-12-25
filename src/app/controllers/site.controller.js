const express= require('express');

class Homecontroller{
    index(req, res, next){
        res.render('home');
    }
}

module.exports = new Homecontroller