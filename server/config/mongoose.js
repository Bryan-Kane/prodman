var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/productmanager');
mongoose.Promise = global.Promise;
module.exports = mongoose;