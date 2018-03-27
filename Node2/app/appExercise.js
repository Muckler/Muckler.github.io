var express = require('express');
var reload = require('reload');
//var imgFile = require('./public/images/Screen Shot 2018-02-20 at 11.48.38 AM.png');
var app = express();

app.use(require('./routes/indexExercise'));
app.use(require('./routes/feedback'));
app.use(require('./routes/api'));

app.set('view engine', 'ejs');
app.set('views', 'app/views');


//public folder
app.use(express.static('app/public'));

var server = app.listen(3000, function(){
    console.log('Example app listening on port 3000');
});

reload(server, app);
