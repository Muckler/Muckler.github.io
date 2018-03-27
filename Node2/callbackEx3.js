/*function greeting(person) {
    return 'Hola, ' + person + '!';
  }*/

function greeting(person, callback) {
    var result = 'Hola ' + person + '!';
    callback(result);
}

setTimeout(greeting, 5000, 'Mike', function(result){
    console.log(result);
})
  