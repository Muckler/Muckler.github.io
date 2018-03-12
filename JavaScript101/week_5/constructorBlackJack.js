function Card(point, suit) {
    this.point = point;
    this.suit = suit;
}

var myCard = new Card(5, 'diamonds');
console.log(myCard);

Card.prototype.getImageUrl = function () {
    //need to convert first letter of suit to caps
    var imgUrl = ('JPEG/' + this.point + this.suit.slice(0, 1).toUpperCase() + '.jpg');
    return imgUrl;s
}
console.log(myCard.getImageUrl());

function Hand() {
    this.Cards = [];
    this.Points = 0;
}
//card below is arbitrary you could use any name, that just pushes the value to Cards in Hand
Hand.prototype.addCard = function (card) {
    this.Cards.push(card);
    this.Points = this.Points + card.point;
}

Hand.prototype.getPoints = function () {
    return this.Points;
}

var myHand = new Hand();
myHand.addCard(new Card(5, 'diamonds'));
myHand.addCard(new Card(13, 'spades'))
console.log(myHand.getPoints());
//code works to this point
//function Deck () {
//this.totalCards 
var suit = "";
var gameDeck = [];
var playerHand = [];
var dealerHand = [];
function Deck() {
    //intialize player hand and dealer hand
    playerHand = [];
    dealerHand = [];
    gameDeck = [];
    //this.unusedDeck = [];
    for (var j = 0; j <= 3; j++) {
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
            for (var i = 1; i <= 13; i++) {
                gameDeck.push(new Card(i, suit));
            } //end of for loop
    } //end of outer for loop

    //call shuffle deck function
    gameDeck = shuffleDeck(gameDeck);

}
var initializeDeck = new Deck();

console.log(gameDeck);

function playerHand () {
    this.Cards = [];
    this.Points = 0;
}
//how is argument being passed to shuffleCard below
function shuffleDeck (a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
    //shuffle logic for deck

//myDeck.unusedDeck = myDeckunusedDeck.shuffleCard();
function draw () {
    thi
}
// console.log(Deck());
//var PlayersHand = new playerHand(Deck)



//Deck.prototype.draw = function () {
//myHand.addCard(new Card(theDeck.pop()));
//}
//console.log(myHand);

//Deck.prototype.numCardsLeft() {

//}
//var myDeck = new Deck()
//console.log(myDeck.draw())

//console.log(myDeck.draw())

//myDeck.shuffle()
//myDeck.numCardsLeft()
