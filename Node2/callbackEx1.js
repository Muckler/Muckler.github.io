/*function add(x, y) {
  var result = x + y;
  return result;
}*/
function add(x, y, callback) {
    var result = x + y;
    callback(result);
}

setTimeout(add, 5000, 1, 2, function (result) { console.log(result); });
