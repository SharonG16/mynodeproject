var express = require('express');
var Volunteer = require('../models/volunteer');

exports.signupForm = function(req, res) {
    res.render('forms/volunteer');
};

exports.create = function(req, res) {
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var address  = req.body.address;
    var phonenumber  = req.body.phonenumber;


    var newVolunteer = new Volunteer({
      firstname: firstname,
      lastname: lastname,
      address: address,
      phonenumber: phonenumber,

    });

    newVolunteer.save(function(err) {
      if (err) throw err;

      console.log('Volunteer saved successfully!');
    });

    res.redirect('/');
};