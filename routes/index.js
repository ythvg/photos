var express = require('express');
var router = express.Router();
var Photo = require('../models/Photo');

/* GET home page. */
router.get('/', function(req, res, next) {
  Photo.find({}, (err, photos) => {
    res.render('index', { title: 'Photos', photos });
  })
});

module.exports = router;