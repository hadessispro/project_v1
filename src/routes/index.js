const homeRoute =  require('./home/index');
const createRoute = require('./create/index');
function route(app){
    app.use('/home', homeRoute);
    app.use('/',createRoute);
}

module.exports = route