var mongoose = require("mongoose");
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/report');

var reportSchema = new Schema({
    patientid: String,
    billno: String,
    report: String
});

var Report = mongoose.model('report', reportSchema);

module.exports = Report;