var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var donationSchema = new Schema({
   fullName: { type: String, required: true },
   email: { type: String, required: true },
   phonenumber: { type: String, required: true },
   amount: { type: String, required: true }
});

var Donation = mongoose.model('Donation', donationSchema);

module.exports = Donation;
