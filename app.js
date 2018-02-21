var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var appRoutes = require('./routes/app');
var messageRoutes = require('./routes/messages');
var userRoutes = require('./routes/user');
var placeRoutes = require('./routes/places');
var salesRoutes = require('./routes/sales');

var mongoose = require('mongoose');

var app = express();

//mongoose.connect('mongodb://localhost:27017/seed-project');

mongoose.connect('mongodb://Dashboard:Dashboard@dashboard-shard-00-00-euixe.mongodb.net:27017,dashboard-shard-00-01-euixe.mongodb.net:27017,dashboard-shard-00-02-euixe.mongodb.net:27017/seed-project?ssl=true&replicaSet=Dashboard-shard-0&authSource=admin');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

app.use('/message', messageRoutes);
app.use('/user', userRoutes);
app.use('/places', placeRoutes);
app.use('/sales', salesRoutes);
app.use('/', appRoutes);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    return res.render('index');
});


module.exports = app;
