/*var myString = [9,8,0,8,7];
var reverseString = myString.reverse();
console.log(reverseString);
function checkPal() {
    if (reverseString == myString) {
        console.log('Palendrome');
    }
}
checkPal();

*/
var num = 11011;

function isPalendrome(number){
    if (number.toString() === number.toString().split("").reverse().join("")){
        //return 
        console.log("Palendrome")
        }

}
isPalendrome(num);



