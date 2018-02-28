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
            output = "*" + "    " +  "*";
        } 
        console.log(output);
        count ++;
    }
}
printBox(6, 4);