const express =  require('express');
const router =  express.Router();
const Sitecontroller = require('../../app/controllers/site.controller')

router.get('/', Sitecontroller.home);



module.exports = router