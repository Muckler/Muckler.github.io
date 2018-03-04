var largestPalindrome = 0;
var temp = 0;
function findLargestPalindrome() {
    for (var i = 100; i < 1000; i++) {
        for (var j = 100; j < 1000; j++) {
            temp = i * j;
            if (((isPalindrome(temp) > 0) && (temp > largestPalindrome))) {
                largestPalindrome = temp;
            }
            else  {
                largestPalindrome = largestPalindrome;
            }
        }
    }
    return largestPalindrome;
}

function isPalindrome(number) {
    if (number.toString() === number.toString().split("").reverse().join("")){
        return 1;
    }
    else {
        return 0;
    }

}

var theAnswer = findLargestPalindrome();
console.log(theAnswer);