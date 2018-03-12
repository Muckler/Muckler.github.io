var theDeck = [];
var suit = "";    
for (var j = 0; j <=3; j++){
    switch (j) {
        case 0: 
        suit = "hearts";
        break;
        case 1:
        suit = "clubs";
        break;
        case 2:
        suit = "diamonds";
        break;
        case 3:
        suit = "spades";
        break;
        default: break;


    }
    for (var i = 1; i <=13; i++) {
    theDeck.push(new Card(i, suit));
    }
}