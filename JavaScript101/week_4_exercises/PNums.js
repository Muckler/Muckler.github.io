function positiveNum(Numbers) {
    var newList = [];
    for (var i =0; i < Numbers.length; i++) {
        if (Numbers[i] > 0) {
            console.log(Numbers[i])
            newList.push(Numbers[i]);
        }
    }
    return newList;
}
var origNum = [1, 4, -67, 56, -9, 7, -2];
console.log(positiveNum(origNum));