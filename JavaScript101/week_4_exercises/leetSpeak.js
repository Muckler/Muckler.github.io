function leetspeak(myString) {
    var theKey = {
        "A": "4" ,
        "E": "3",
        "G": "6",
        "L": "1",
        "O": "0",
        "S": "5",
        "T": "7"
    };
    var letter = myString.split('');
    console.log(letter.length)
    for (var i = 0; i < letter.length; i++){
        for (var key in theKey) {
            if (letter[i] === key) {
                console.log(theKey[key]);
            }
        }
    }
}
leetspeak('LEET')