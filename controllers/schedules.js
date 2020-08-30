var express = require('express');
var Schedule = require('../models/schedule');

exports.signupForm = function(req, res) {
    res.render('accounts/schedule');
};

exports.create = function(req, res) {
    var address = req.body.address;

    var newSchedule = new Schedule({
      address: address,
    });

    newSchedule.save(function(err) {
      if (err) throw err;

      console.log('Address saved successfully!');
    });

    res.redirect('/');
};