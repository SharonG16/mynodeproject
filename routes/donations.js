var express = require('express');
var donationController = require('../controllers/donations');
var router = express.Router();

router 
  .route('/donate')
  .get(donationController.signupForm)
  .post(donationController.create)

module.exports = router;