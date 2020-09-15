var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var scheduleSchema = new Schema({
   address: { type: String, required: true },
   date: { type: Date, required: true },
   time: { type: String, required: true }
});

var Schedule = mongoose.model('Schedule', scheduleSchema);

module.exports = Schedule;