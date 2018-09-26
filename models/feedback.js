var mongoose = require("mongoose");
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/feedback');

var feedbackSchema = new Schema({
    bedno: String,
    feedback: String
});

var Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;