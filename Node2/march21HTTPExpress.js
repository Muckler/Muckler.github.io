
var express = require('express');
//creating a variable to access methods of var app
var app = express();
//1st argument is path
app.get('/happy', function(req, res) {
    //info sent to client side, all we can send is plain text cant send html tags
    res.send('<h1>Hello World!</h1>');
});
//page ending in //contact
app.get('/contact', function(req, res) {
    //info sent to client side, all we can send is plain text
    res.send('<h1>Email us here</h1>');
});
app.listen(3000, function(){
    //put a message to know server is running
    console.log('Example app listening on port 3000!');
});