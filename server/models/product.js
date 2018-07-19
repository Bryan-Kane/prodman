mongoose = require('../config/mongoose.js');

var ProductSchema = new mongoose.Schema({
    title: {type: String, required: ['Title is required'], minlength: [4, 'Minimum length of 4']},
    price: {type: Number, required: ['Price is required']},
    url: {type: String}
});

mongoose.model('Product', ProductSchema);
var Product = mongoose.model('Product');
module.exports = Product;