var express = require('express');
var Schedule = require('../models/schedule');

exports.scheduleForm = function(req, res) {
    res.render('schedules/new');
};

exports.create = function(req, res) {
    var address = req.body.address;
    var date = req.body.date;
    var time = req.body.time;

    var newSchedule = new Schedule({
      address: address,
      date: date,
      time: time,
    });

    newSchedule.save(function(err) {
      if (err) throw err;

      console.log('Schedule saved successfully!');
    });

    res.redirect('/');
};