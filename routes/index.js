var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/api', function(req, res, next) {
  res.render('index', { title: 'Express listening on port 1234' });
});

module.exports = router;
