function printSquare(number) {
    console.log(number);
    for (var count = 0; count < number; count ++) {
        var output = "";
        for (var count2 = 0; count2 < number; count2 ++) {
            output = output + "*";
        }    
        console.log(output);
    }
}
printSquare(5);