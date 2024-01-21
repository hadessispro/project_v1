const express = require("express");



class create{
    async login(req,res,next){
        try{
            await res.render('partials/login');
        }catch(next){
            console.log(next)
        }
    }

}


module.exports = new create();