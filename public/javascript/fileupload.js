var express = require('express');
var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
var app = express();
var path = require('path');

app.get('/', function (req, res) {
    res.render('pages/index.ejs');
    res.end();//for ending the response
});
app.post('/fileupload', function (req, res) {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        var oldpath = files.filetoupload.path;
        var newpath = './' + files.filetoupload.name;
        console.log(oldpath);
        console.log(newpath);
        fs.rename(oldpath, newpath, function (err) {
            if (err) throw err;
            res.write('File uploaded and moved!');
            res.end();
        });
    });
})
app.listen(8080, function () {
    console.log('Server running at http://127.0.0.1:8080/');
});