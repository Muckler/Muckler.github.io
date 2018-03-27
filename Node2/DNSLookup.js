//var request = require('request');
var url = 'w3schools.com';
const dns = require('dns');

dns.lookup(url, function(err, address) {

  console.log(address);

});