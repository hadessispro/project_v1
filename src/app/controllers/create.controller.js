const express = require("express");



class create{
    async login(req,res,next){
        try{
            await res.render('login');
        }catch(next){
            console.log(next)
        }
    }
    async sign(req,res,next){
        try{
            await res.render('signup');
        }catch(next){
            console.log(next)
        }
    }
    async reset(req,res,next){
        try{
            await res.render('reset');
        }catch(next){
            console.log(next)
        }
    }
 

}


module.exports = new create();