var express = require('express');
var scheduleController = require('../controllers/schedules');
var router = express.Router();

router 
  .route('/scheduleform')
  .get(scheduleController.signupForm)
  .post(scheduleController.create)

module.exports = router;