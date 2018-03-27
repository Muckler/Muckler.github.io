/*function subtract(x, y) {
    return x - y;
  }*/

function subtract(x, y, callback) {
    var result = x -y;
    return callback(result);
}

setTimeout(subtract, 5000, 5, 2, function(result){
    console.log(result);
})
  