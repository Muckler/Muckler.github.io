var moreNums= [
  [1, 3, 4],
  [2, 4, 6, 8],
  [3, 6]
];

//function sumIt(getSum) {
   //console.log(getSum); 
   //console.log(getSum[0]);
   //below workds to get sum of the first index of array
   //newSum = getSum[0].reduce(function(a,b) {
       //return a + b;
   //}, 0);
   //console.log(newSum);


   var sumAns = [];
   var newArray = [];

   moreNums.forEach(function(element) {           
        sumAns = element.reduce(function sum(a, b) {
        return a + b;
        }, 0);
        
        console.log(sumAns);
        newArray.push(sumAns);
   });
console.log(newArray);
var sorNew = newArray.sort(function(a,b){return a-b});
console.log(sorNew);
   
   
  //return newSum;

//var answer = sumIt(moreNums);
//console.log(answer);
