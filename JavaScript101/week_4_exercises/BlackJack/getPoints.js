function totalPts (ptCard, thePts) {
    console.log(ptCard, thePts);s
    var newPts = ptCard.point + thePts;
    console.log(newPts);
    return newPts;
}
var testCard = [{ point: 9, suit: "hearts" }];
var allPts = 0;
console.log(totalPts(testCard, allPts));
