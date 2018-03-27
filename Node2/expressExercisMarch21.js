var express = require('express');
var app = express();
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

app.get('/yearage32', function(req, res) {
  
    res.send('<h1>You were born in 1985</h1>');
});

app.get('/cats', function(req, res) {
    console.log('Meow');
    res.send('<h1>Meow!</h1>');
});

app.get('/dogs', function(req, res) {
    console.log('Woof');
    res.send('<h1>Woof!</h1>');
});

app.get('/cats_and_dogs', function(req, res) {
    console.log('Living together');
    res.send('<h1>Living together!</h1>');
});

app.get('/greet/Mike', function(req, res) {
    console.log('Hello Mike');
    res.send('<h1>Hello Mike!</h1>');
});

app.listen(3000, function(){
    //put a message to know server is running
    console.log('Example app listening on port 3000!');
});

