var router = require('express').Router();
var formidable = require('formidable');
var fs = require('fs');
var path = require('path');
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/report');
var reportModel = require('../models/report');
var upload = require('../multer/storage')

router.get('/login', function (req, res) {
  res.render('pages/login');
});
router.get('/reportupload', function (req, res) {
  res.render('pages/reportupload');
});
router.post('/reportupload', function (req, res) {
  console.log("hii");
  upload(req, res, function (err) {
    console.log(req.body.patientid);
    console.log(req.body.billno);
    if (req.filetoupload == null || req.filetoupload == undefined || req.filetoupload == "") {
      console.log(req.filetoupload);
      res.render('pages/status',{
        message: "Sorry, you provided worng info", type: "error"
      });
    } else {
      console.log("b");
      if (err) { console.log(err); }
      else {
        console.log(req.body);
        console.log(req.file)
        var newPerson = new Person({
          patientid: req.body.patientid,
          billno: req.body.billno,
          report: req.file.filename
        });
        newPerson.save(function (err, Person) {
          if (err)
            res.render('pages/status', { message: "Database error", type: "error" });
          else
            res.render('pages/status', {
              message: "New person added", type: "success", patient: patientInfo
            });
        });
      }
    }
  })
})
//     var form = new formidable.IncomingForm();
//     form.parse(req, function (err, fields, files) {
//         console.log(patientid);
//         console.log(billno);
//         var oldpath = files.filetoupload.path;
//         var newpath = '/home/abinash/Downloads/' + files.filetoupload.name;
//         console.log(oldpath);
//         console.log(newpath);
//         fs.rename(oldpath, newpath, function (err) {
//             if (err) throw err;
//             res.send('File uploaded and moved!');
//             // res.end();
//         });
//     });
// })
router.get('/status', function (req, res) {
  res.render('pages/status')
})

router.get('/AmbulanceGo', function (req, res) {
  res.render('AmbulanceGo')
})

router.get('/staff', function (req, res) {
  res.render('staff')
})

router.get('/exchange', function (req, res) {
  res.render('exchange')
})

router.get('/medicine', function (req, res) {
  res.render('medicine')
})

router.get('/record', function (req, res) {
  res.render('record')
})

router.post('/recorddownload', function (req, res) {
  var reportInfo = req.body;
  console.log(req.body);
  if (!reportInfo.patientid || !reportInfo.billno) {
    res.render('recordview', {
      message: "Sorry, you provided worng info", type: "error"
    });
  } else {
    Person.find({ patientid: reportInfo.patientid, billno: reportInfo.billno },
      function (err, response) {
        console.log(response);
        if (err)
          res.render('recordview', { message: "Database error", type: "error" });
        else
          res.render('recordview', {
            message: "report retrieved", type: "success", report: response
          });
      });
  }
})

router.get('/recordview', function (req, res) {
  res.render('recordview')
})
router.get('/complain', function (req, res) {
  res.render('complain')
})

router.get('/review', function (req, res) {
  res.render('review')
})

module.exports = router;
