function printBox(number1, number2) {
    console.log(number1, number2);
    for (var count = 1; count < number2 + 1;) {
        var output = "";
        if (count == 1 || count == number2){
            for (var count2 = 1; count2 < number1 + 1;) {
                output = output + "*";
                count2 ++;
            }       
        }   
        else {
            output = " * Welcome to Digital Crafts *";
        } 
        console.log(output);
        count ++;
    }
}
printBox(30, 3);