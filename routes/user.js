var router = require('express').Router();

router.post('/fileupload', function (req, res) {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        var oldpath = files.filetoupload.path;
        var newpath = './' + files.filetoupload.name;
        console.log(oldpath);
        console.log(newpath);
        fs.rename(oldpath, newpath, function (err) {
            if (err) throw err;
            res.write('File uploaded and moved!');
            // res.end();
        });
    });
})

router.get('/AmbulanceGo', function(req,res) {
  res.render('AmbulanceGo')
})

router.get('/staff', function(req,res) {
  res.render('staff')
})

router.get('/exchange', function(req,res) {
  res.render('exchange')
})

router.get('/medicine', function(req,res) {
  res.render('medicine')
})

router.get('/record', function(req,res) {
  res.render('record')
})

router.get('/complain', function(req,res) {
  res.render('complain')
})

router.get('/review', function(req,res) {
  res.render('review')
})

module.exports = router;
