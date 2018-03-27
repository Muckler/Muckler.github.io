var express = require('express');
var app = express();
var dataFile = require('./data.json');
console.log(dataFile);
app.get('/', function(req, res) {
    var info = "";
    dataFile.speakers.forEach(function(item){
        info += `
            <li>
            <h2>${item.name}</h2><style> h2 { color: blue;}</style>
            <h3>Summary</h3><style> h3 { color: red;}</style>
            <p>${item.summary}</p>
            <h3>Description</h3>
            <p>${item.description}</p>
        `; //ending string with a semicolon
    });
        res.send(
          //backticks ` allow you to do multiple lines of code in one string
            `
                <h1>Speakers</h1>
                ${info}
            `
        );
    });
        app.listen(3000, function(){
            //put a message to know server is running
            console.log('Example app listening on port 3000!');
    });