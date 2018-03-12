function Deck() {
    this.totalCards = [{ point: 1, suit: 'hearts' }, { point: 1, suit: 'diamonds' }, { point: 1, suit: 'clubs' }, { point: 1, suit: 'spades' },
    { point: 1, suit: 'hearts' }, { point: 1, suit: 'diamonds' }, { point: 1, suit: 'clubs' }, { point: 1, suit: 'spades' },
    { point: 2, suit: 'hearts' }, { point: 2, suit: 'diamonds' }, { point: 2, suit: 'clubs' }, { point: 2, suit: 'spades' },
    { point: 3, suit: 'hearts' }, { point: 3, suit: 'diamonds' }, { point: 3, suit: 'clubs' }, { point: 3, suit: 'spades' },
    { point: 4, suit: 'hearts' }, { point: 4, suit: 'diamonds' }, { point: 4, suit: 'clubs' }, { point: 4, suit: 'spades' },
    { point: 5, suit: 'hearts' }, { point: 5, suit: 'diamonds' }, { point: 5, suit: 'clubs' }, { point: 5, suit: 'spades' },
    { point: 6, suit: 'hearts' }, { point: 6, suit: 'diamonds' }, { point: 6, suit: 'clubs' }, { point: 6, suit: 'spades' },
    { point: 7, suit: 'hearts' }, { point: 7, suit: 'diamonds' }, { point: 7, suit: 'clubs' }, { point: 7, suit: 'spades' },
    { point: 8, suit: 'hearts' }, { point: 8, suit: 'diamonds' }, { point: 8, suit: 'clubs' }, { point: 8, suit: 'spades' },
    { point: 9, suit: 'hearts' }, { point: 9, suit: 'diamonds' }, { point: 9, suit: 'clubs' }, { point: 9, suit: 'spades' },
    { point: 10, suit: 'hearts' }, { point: 10, suit: 'diamonds' }, { point: 10, suit: 'clubs' }, { point: 10, suit: 'spades' },
    { point: 11, suit: 'hearts' }, { point: 11, suit: 'diamonds' }, { point: 11, suit: 'clubs' }, { point: 11, suit: 'spades' },
    { point: 12, suit: 'hearts' }, { point: 12, suit: 'diamonds' }, { point: 12, suit: 'clubs' }, { point: 12, suit: 'spades' },
    { point: 13, suit: 'hearts' }, { point: 13, suit: 'diamonds' }, { point: 13, suit: 'clubs' }, { point: 13, suit: 'spades' }];

}
//could use for any other prototype parent
// function draw() {
//     console.log("debug:draw");
//     console.log(this.totalCards);
//     var newCard = this.totalCards.pop();

//     return newCard;
// }

// Deck.prototype.draw = draw();

Deck.prototype.draw = function () {

    console.log("debug:draw");
    console.log(this.totalCards);
    var newCard = this.totalCards.pop();

    return newCard;
}

/*Deck.prototype.shuffle = function () {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

Deck.prototype.numCardsLeft() {

}*/
var myDeck = new Deck();
console.log(myDeck);
var myCard = myDeck.draw();
console.log("popped card");
console.log(myCard);
/*Card { point: 6, suit: "clubs" }
> myDeck.draw()
Card { point: 1, suit: "spades" }
> myDeck.shuffle()
    > myDeck.numCardsLeft()*/
