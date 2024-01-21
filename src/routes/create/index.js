const express =  require("express");
const route =  express.Router();
const createController =  require("../../app/controllers/create.controller");

route.get('/create',createController.login);
route.get('/signup',createController.sign);
route.get('/reset',createController.reset);


module.exports = route;