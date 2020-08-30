var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var addressSchema = new Schema({
   address: { type: String, required: true },
});

var Address = mongoose.model('Address', addressSchema);

module.exports = Address;