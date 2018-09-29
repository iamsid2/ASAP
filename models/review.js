var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var reviewSchema = new Schema({
    phc: String,
    doctor: String
});

var Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
