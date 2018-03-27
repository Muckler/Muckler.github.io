var express = require('express');
//creating a variable to access methods of var app
var app = express();

var ejs = require('ejs'),
    people = ['geddy', 'neil', 'alex'],
    html = ejs.render('<%= people.join(", "); %>', {people: people});

app.get('/hello', function(req, res){
    
    res.send(html);
});

app.listen(3000, function(){
    //put a message to know server is running
    console.log('Example app listening on port 3000!');
});