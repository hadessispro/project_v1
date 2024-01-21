const express =  require("express");
const route =  express.Router();
const createController =  require("../../app/controllers/create.controller");

route.get('/',createController.login);


module.exports = route;