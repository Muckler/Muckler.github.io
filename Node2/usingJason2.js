var express = require('express');
var app = express();
var dataFile = require('./data.json');
console.log(dataFile);
app.get('/:speakerid', function(req, res) {
    var speaker = dataFile.speakers[req.params.speakerid];
            
        res.send(
          //backticks ` allow you to do multiple lines of code in one string
            `<li>
            <h1>${speaker.title}</h1>
            <h2>${speaker.name}</h2>
            <p>${speaker.summary}</p>
            `
        );
    });
        app.listen(3000, function(){
            //put a message to know server is running
            console.log('Example app listening on port 3000!');
    });