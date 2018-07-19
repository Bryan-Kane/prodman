var products = require('../controllers/products.js');
module.exports = function(app){
    app.get('/getallproducts', function (req, res) {
        products.findall(req, res)
    });
    app.post('/addproduct', function(req, res) {
        products.addproduct(req, res);
    });
    app.post('/deleteproduct', function (req, res) {
        products.deleteproduct(req, res);
    });
    app.post('/getaproduct', function (req, res) {
        products.getaproduct(req, res);
    });
    app.post('/editproduct', function (req, res) {
        products.editproduct(req, res);
    });
    app.all("*", (req, res, next) => {
        products.defaultpath(req, res, next);
    });
};