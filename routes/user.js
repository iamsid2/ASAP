var router = require('express').Router();
var formidable = require('formidable');
var fs = require('fs');
var path = require('path');
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/report');
var Report = require('../models/report');
var upload = require('../multer/storage');
var Feedback = require('../models/feedback');

router.get('/login', function (req, res) {
  res.render('pages/login');
});
router.get('/reportupload', function (req, res) {
  res.render('pages/reportupload');
});
router.post('/reportupload', upload.single('report'), function (req, res, err) {
  if (!req.body.patientid || !req.body.billno || req.file == null || req.file == undefined || req.file == "") {
    console.log(req.file);
    res.send("Sorry, you provided wrong info");
  } else {
      console.log("a");
      var patientInfo = req.body;
      var newReport = new Report({
        patientid: req.body.patientid,
        billno: req.body.billno,
        report: req.file.filename
      });
      newReport.save(function (err, Person) {
        if (err)
          res.send("Database error");
        else
          res.send("New report added");
      });
  }
})

router.get('/status', function (req, res) {
  res.render('status')
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

router.post('/recorddownload', upload.single('report'), function (req, res) {
  var reportInfo = req.body;
  console.log(req.body);
  if (!reportInfo.patientid || !reportInfo.billno) {
    res.render('recordview', {
      message: "Sorry, you provided worng info", type: "error"
    });
  } else {
    Report.findOne({ patientid: reportInfo.patientid, billno: reportInfo.billno },
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
router.get('/feedback', function (req, res) {
  res.render('feedback')
})

router.post('/feedback', function (req, res) {
  if (!req.body.bedno || !req.body.feedback)
    res.send("sorry you provided wrong info");
  else {
    var newFeedback = new Feedback({
      bedno: req.body.bedno,
      feedback: req.body.feedback
    });
    console.log(newFeedback);
    newFeedback.save(function (err, Feedback) {
      if (err)
        res.send(err);
      else
        console.log(Feedback);
      res.send("Thank you for your feedback");
    });
  }
})

router.get('/review', function (req, res) {
  res.render('review')
})


module.exports = router;
