var express = require('express');
var router = express.Router();
var formidable = require('formidable');
var util = require('util');
var fs = require('fs');
var join = require('path').join;
var photosDir = require('../config').photosDir;
var Photo = require('../models/Photo');

/* GET photo upload. */
router.get('/', function(req, res, next) {
  res.render('upload', {
    title: 'Photo upload'
  });
});

router.post('/', function(req, res, next) {
  var form = new formidable.IncomingForm();

  form.parse(req, function(err, fields, files) {
    var img = files.image;
    var name = fields.name || img.name;
    var path = join(photosDir, img.name);

    fs.rename(img.path, path, (err) => {
      if (err) return next(err);
      
      Photo.create({
        name: name,
        path: img.name
      }, (err) => {
        if (err) return next(err);
        res.redirect('/');
      });
    })

  });
});


module.exports = router;
