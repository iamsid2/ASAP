var mongoose = require("mongoose");
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/report');

var reportSchema = new Schema({
    patientid: String,
    billno: String,
    report: Object
});

var Person = mongoose.model('person', reportSchema);

module.exports = Person;