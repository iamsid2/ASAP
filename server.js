var express = require('express');
var http = require('http');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var engine = require('ejs-mate');
var cookieParser = require('cookie-parser');
var formidable = require('formidable');
var fs = require('fs');
var app = express();
var path = require('path');
var multer = require('multer');

//Middleware
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.engine('ejs', engine);
app.set('view engine', 'ejs');

var mainRoutes = require('./routes/main');
var userRoutes = require('./routes/user');

app.use(mainRoutes);
app.use(userRoutes);

mongoose.connect('mongodb://localhost:27017 ');
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.once('open', function () {
  console.log("Connection to MongoDB succesful...");
}).on('error', function (error) {
  console.log("MongoDB connection error: ", error);
});

app.listen(8080, function () {
    console.log("Server is running at 8080");
});

