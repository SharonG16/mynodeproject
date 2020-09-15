var express = require('express');
var donationController = require('../controllers/donations');
var router = express.Router();



router 
  .route('/donationform')
  .get(donationController.donationForm)
  .post(donationController.create)

module.exports = router;