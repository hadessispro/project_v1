const express =  require('express');
const {default:helmet} =  require('helmet');
const compresion = require('compresion');
const {engine} =  require('express-handlebars')
const morgan =  require('morgan');
const app = express();
const routes = require('./routes/index');
const path = require('path');

//use middlewave
app.use(morgan('combined'));
app.use(helmet());// che cookie
app.use(compresion())// giảm dữ liệu
app.use(express.json()); 
app.use(express.urlencoded({
    extended:true
}));

//handlebars

app.engine('handlebars',engine());
app.set('view engine', 'handlebars');
app.use('views', path.join(__dirname, 'resources', 'views'));
// use module




routes(app);



module.exports = app;

