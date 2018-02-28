function LongVowel(myString) {
    var newString=myString.replace('ee', 'eeeee');
    var newString=myString.replace('a', 'aaaaa');
    var newString=myString.replace('oo', 'ooooo');
    return console.log(newString);
}
LongVowel('Cheese')
