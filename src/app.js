const express =  require('express');
const {default:helmet} =  require('helmet');
const compresion = require('compresion');
const {engine} =  require('express-handlebars')
const morgan =  require('morgan');
const app = express();
const routes = require('./routes/index');
const path = require('path');
const  db = require('./config/db/mongodb.config');


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
app.set('views', path.join(__dirname, 'resources/views'));
app.use(express.static(path.join(__dirname,'public')))
// use module

const checkover =  require('./helpers/check.connect');
checkover.checkoverload();

routes(app);
db.connect()


module.exports = app;

