var express = require('express');
var bodyParser = require('body-parser');
var massive = require('massive');
var connectionString = "postges://Snow@localhost/sandbox";
massive.connectSync({conncetionString: connectionString});
var app = module.exports = express();

app.use(bodyPraser.json());
app.use(cors());
app.set('db', massiveInstance);
var db =app.get('db');
var controller = require('./controller.js');
var port = 3000;


app.listen(port, function(){
  console.log("Listening on port 3000");
});
