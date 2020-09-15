var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var donationSchema = new Schema({
   fullname: { type: String, required: true },
   email: { type: String, required: true },
   phonenumber: { type: Number, required: true },
   amount: { type: Number, required: true }
});

var Donation = mongoose.model('Donation', donationSchema);

module.exports = Donation;