const express=  require('express');
const {default:helmet} =  require('helmet');
const compresion = require('compresion');
const {engine} =  require('express-handlebars')
//use middlewave

app.use(helmet());
app.use(compresion())
app.use(express.json()); 
app.use(express.urlencoded({
    extended:true
}));


