var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/photos');

var schema = new mongoose.Schema({
    name: String,
    path: String
});

module.exports = mongoose.model('Photo', schema);
