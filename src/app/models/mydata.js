const mongoose = require("mongoose");
const { Schema } = require('mongoose');


const MydataSchema = new Schema({
    
    name:{type:String,maxlength:250},
    description:{type:String,maxlength:250},
    image:{type:String},
    videoId:{type:String},
    albums:{type:String,maxlength:250},

},{timestamps:true});



module.exports = mongoose.model('mydata', MydataSchema);

