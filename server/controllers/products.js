Product = require('../models/product.js');
var path = require('path')

module.exports = {
    findall: function(req, res) {
        Product.find({}, function (err, products) {
            if (err) {
                console.log(err);
                res.json({message: err});
            } else {
                res.json({message: 'Success', products: products});
            }
        });
    },
    addproduct: function(req, res) {
        var prod = new Product({title: req.body.title, price: req.body.price, url: req.body.url});
        prod.save(function(err) {
        if(err){
            res.json({message: err});

        } else {
            res.json({message: 'Successfully added a product'});
        }
    });
    },
    deleteproduct: function(req, res) {
        Product.findOneAndRemove({_id: req.body.id}, function (err) {
            if(err){
                console.log(err)
                res.json({message: err});
            } else {
                console.log('deleted item');
                res.json({message: 'Success'});
            }
        })
    },
    getaproduct: function(req, res) {
        Product.findOne({_id: req.body.id}, function (err, product) {
            if (err) {
                console.log(err);
                res.json({message: err})
            } else {
                res.json({message: 'success', product: product});
            }
        });
    },
    editproduct: function(req, res) {
        Product.findOne({_id: req.body.id.id}, function (err, product) {
            if (err) {
                console.log(err);
                res.json({message: err});
            } else {
                product.title = req.body.product.title;
                product.price = req.body.product.price;
                product.url = req.body.product.url;
                product.save( function (err) {
                    if (err) {
                        console.log(err);
                        res.json({message: err});
                    } else {
                        res.json({message: 'Success edited product'});
                    }
                });
            }
        });
    },
    defaultpath: function(req, res, next) {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    }
};