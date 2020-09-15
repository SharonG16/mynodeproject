var express = require('express');
var scheduleController = require('../controllers/schedules');
var router = express.Router();



router 
  .route('/scheduleform')
  .get(scheduleController.scheduleForm)
  .post(scheduleController.create)


module.exports = router;