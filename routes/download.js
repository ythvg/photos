var express = require('express');
var router = express.Router();
var join = require('path').join;
var photosDir = require('../config').photosDir;
var Photo = require('../models/Photo');

/* GET image download. */
router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  Photo.findById(id, (err, photo) => {
    if (err) return next(err);
    var path = join(photosDir, photo.path);
    // res.sendfile(path);
    res.download(path, `${photo.name}.jpg`);
  });
});

module.exports = router;
