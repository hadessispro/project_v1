const express =  require('express');
const router =  express.Router();
const homecontroller = require('../../app/controllers/site.controller')

router.get('/', homecontroller.index);



module.exports = router