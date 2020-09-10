var express = require('express');
var Donation = require('../models/donation');

exports.signupForm = function(req, res) {
    res.render('donations/new');
};

exports.create = function(req, res) {
    var fullname = req.body.fullname;
    var email = req.body.email;
    var phonenumber = req.body.phonenumber;
    var amount = req.body.amount;

    var newDonation = new Donation({
      fullname: fullname,
      email: email,
      phonenumber: phonenumber,
      amount: amount
    });

    newDonation.save(function(err) {
      if (err) throw err;

      console.log('Donation saved successfully!');
    });

    res.redirect('/');
};