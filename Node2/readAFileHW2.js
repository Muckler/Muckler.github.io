var fs = require('fs');
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter filename: ', function(filename) {
  rl.close();
  fs.readFile(filename, function(err, buffer) {
    if (err) {
      console.log(err.message);
      return;
    }
    var content = buffer.toString();
    var upcased = content.toUpperCase();
    console.log(upcased);
  });
});
