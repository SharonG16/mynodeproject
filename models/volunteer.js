var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var volunteerSchema = new Schema({
   firstname: { type: String, required: true },
   lastname: { type: String, required: true },
   address: { type: String, required: true },
   phonenumber: { type: String, required: true }
});

var Volunteer = mongoose.model('Volunteer', volunteerSchema);

module.exports = Volunteer;