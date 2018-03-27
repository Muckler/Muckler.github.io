var fs = require('fs')
fs.readFile(process.argv[2], 'utf8', function(error, data){
    if (error) {
        console.error(error.message);
        return;
      }
    var lines = data.split('\n').length - 1;
    console.log(lines);
})
