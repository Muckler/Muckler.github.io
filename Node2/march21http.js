var http = require('http');
//callback function takes request and response as arguments
//function createServer take callback function
var myServer = http.createServer(function(request, response){
    //content may be content-type can be html or text does not get 
    //converted to object until gets to browser, expecting text on protocol
    //to insert html change content-type to text/html
    response.writeHead(200, {"Content-Type": "text/plain"});
    //to send back something to client or sending Digital Crafts to browser
    response.write('Digital Crafts');
    //closing connection here
    response.end();
});
//asking server to  to listen on  a specific port
//listen method creating a live port on port 3000
myServer.listen(3000);
console.log("port 3000");