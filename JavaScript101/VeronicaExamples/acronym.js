var acronym = ['very', 'important', 'person'];
var a1 = acronym.reduce(function (value, item) {
    return value + item.charAt(0).toUpperCase();
}, '');

console.log(a1);