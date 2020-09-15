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

/* GET schedule for pick up page. */
router.get('/schedule', function(req, res, next) {
  res.render('schedulepickup', { title: 'Calgary Children Society' });
});

/* GET donate page. */
router.get('/donate', function(req, res, next) {
  res.render('donate', { title: 'Calgary Children Society' });
});


module.exports = router;


