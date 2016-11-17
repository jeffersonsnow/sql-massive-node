var express = require('express');
var bodyParser = require('body-parser');
var massive = require('massive');
var cors = require('cors');
var connectionString = "postgres://Snow@localhost/sandbox";
var massiveInstance = massive.connectSync({connectionString : connectionString});


var app = module.exports = express();

app.use(bodyParser.json());
app.use(cors());

app.set('db', massiveInstance);
var db = app.get('db');
var controller = require('./controller.js');
var port = 3000;
//console.log(db);

app.post('/api/product', controller.create);
app.get('/api/product/:productid', controller.getOne);
app.get('/api/products', controller.getAll);
// app.put('/api/product', controller.update);
app.put('/api/product/:productid', controller.update); //localhost:3000/api/product/1/?description=changed
app.delete('/api/product/:productid', controller.delete);

app.listen(port, function() {
  console.log("Started server on port", port);
});
