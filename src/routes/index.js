const homeRoute =  require('./home/index');

function route(app){
    app.use('/home', homeRoute);

}


module.exports = route