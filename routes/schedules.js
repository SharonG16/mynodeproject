var express = require('express');
var scheduleController = require('../controllers/schedules');
var router = express.Router();

router 
  .route('/fillupform')
  .get(scheduleController.signupForm)
  .post(scheduleController.create)

module.exports = router;