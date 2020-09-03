var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Calgary Children Society' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Calgary Children Society' });
});

/* GET volunteer page. */
router.get('/volunteer', function(req, res, next) {
  res.render('volunteer', { title: 'Calgary Children Society' });
});

/* GET schedule page. */
router.get('/schedule', function(req, res, next) {
  res.render('schedule', { title: 'Calgary Children Society' });
});


module.exports = router;


