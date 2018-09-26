var mongoose = require("mongoose");
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/feedback');
var db = mongoose.connection;
db.once('open', function () {
  console.log("Connection to Feedback succesful...");
}).on('error', function (error) {
  console.log("MongoDB connection error: ", error);
});

var feedbackSchema = new Schema({
    bedno: String,
    feedback: String
});

var Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;