// require the express module inside the app
var express = require("express");
// the path module provides useful functionality to access and interact with the file system
var path = require("path");

// requiring the body-parser module to parse the request posted from the React client side
var bodyParser = require("body-parser");
const res = require("express/lib/response");

// this creates a new express application
var app = express();
app.use(express.static(path.join(__dirname,"html")));

app.use(bodyParser.json());

// creating a sign in method to validate the user sign-in process
app.post('/signin', function (req, res) {
  var user_name=req.body.email;
  var password=req.body.password;
  if(user_name=='admin' && password=='admin'){
    res.send('success');
  } 
  else {
    res.send('Failure');
  }
})

// assign a port number for the application to listen on a port
app.listen(7777, function(){
  console.log("Started listening on port", 7777);
})