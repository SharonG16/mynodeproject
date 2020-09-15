var express = require('express');
var volunteerController = require('../controllers/volunteers');
var router = express.Router();

router 
  .route('/volunteerform')
  .get(volunteerController.signupForm)
  .post(volunteerController.create)

module.exports = router;