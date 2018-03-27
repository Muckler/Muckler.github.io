var express = require('express');
//creating a variable to access methods of var app
var app = express();
//1st argument is path
//expecting name parameter on url, callback will consume parameter
//easy way to move from one pate to the next, : colon means expecting parameter
app.get('/hello/:name', function(req, res){
    //params.name is from name in line 7 above, it must match what is after hello
    //world is displayed if dont enter name in url by using || 'world'
    var name = req.params.name || 'world';
    res.send('Hello ' + name + '!');
});

app.get('/hello1', function(req, res){
    var name = req.params.name || 'world';
    res.send('Hello ' + name + '!');
});

app.listen(3000, function(){
    //put a message to know server is running
    console.log('Example app listening on port 3000!');
});