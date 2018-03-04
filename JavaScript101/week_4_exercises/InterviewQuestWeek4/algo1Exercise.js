var result = []
var num = 1
var denominator = 1

while (true) {
   if (num % denominator == 0) {
       result.push("0");
       denominator++;
   } else if (num % denominator != 0) {
       result = [];
       num++;
       denominator = 1;
   }

   if (result.length == 20) {
       break;
   }
}
console.log(num);
// test numbers
for (var i = 1; i < 21; i++) {
   console.log(num % i);
}