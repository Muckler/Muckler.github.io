/*var testArray = [-2, 1, 0, 2, -3, 3, -5, 5, 7, 8, 9];

var resultArray = [];

for (let i = 0; i < testArray.length; i++) {
    let opposite = testArray[i] * -1;

    for (let j = 1; j < testArray.length; j++) {
        if (testArray[j] === opposite) {
            let pair = [];
            pair.push(testArray[i], opposite);
            resultArray.push(pair);
        } 
    }
}

console.log(resultArray);*/
var bozoArray = [2, 1, 9, 4, 3, -1, 5];
var sortedBozo = bozoArray.sort();
console.log(sortedBozo);

function isEqual(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[i]) {
            i++;
            
        }
        return true;
    }
    return false;
}

while (true) {
    var indexPick1 = Math.floor(Math.random() * sortedBozo.length);
    var indexPick2 = Math.floor(Math.random() * sortedBozo.length);
    var temp;
    temp = bozoArray[indexPick1];
    bozoArray[indexPick1] = bozoArray[indexPick2];
    bozoArray[indexPick2] = temp;
    
    if (isEqual(bozoArray, sortedBozo)) === true) {
        console.log(bozoArray); 
        break;
    }
    
}