var express = require('express');
var app = express();

// validation messages
const flash = require('express-flash')
app.use(flash());

const bodyParser = require('body-parser');
app.use(bodyParser.json());

var path = require('path');
app.use(express.static(path.join(__dirname, './static')));

app.use(express.static(__dirname + '/public/dist/public'));

require('./server/models/product.js')
require('./server/config/routes.js')(app)

// Setting our Server to Listen on Port: 8000
const port = 8000;
app.listen(port, function () {
    console.log("listening on port: ", port);
})


