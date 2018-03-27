var fs = require('fs');
var filename = "";
//error is an argument and if readFile is unsuccessful will pass to if(error)
//otherwise result of readFile will got to buffer. Callback not being executed until
//filename has been read in by readFile
fs.readFile(filename, function (error, buffer) {
    //should always have an error message with below if statment
    if (error) {
      console.error(error.message);
      return;
    }
    console.log('File Data: ', buffer.toString());
  });
