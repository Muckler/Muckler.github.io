var dealerHand = [];
var playerHand = [];

var deck = [{point: 1, suit: 'hearts'},  {point: 1, suit: 'diamonds'}, {point: 1, suit: 'clubs'}, {point: 1, suit: 'spades'},
{point: 1, suit: 'hearts'},  {point: 1, suit: 'diamonds'}, {point: 1, suit: 'clubs'}, {point: 1, suit: 'spades'},
{point: 2, suit: 'hearts'},  {point: 2, suit: 'diamonds'}, {point: 2, suit: 'clubs'}, {point: 2, suit: 'spades'},
{point: 3, suit: 'hearts'},  {point: 3, suit: 'diamonds'}, {point: 3, suit: 'clubs'}, {point: 3, suit: 'spades'},
{point: 4, suit: 'hearts'},  {point: 4, suit: 'diamonds'}, {point: 4, suit: 'clubs'}, {point: 4, suit: 'spades'},
{point: 5, suit: 'hearts'},  {point: 5, suit: 'diamonds'}, {point: 5, suit: 'clubs'}, {point: 5, suit: 'spades'},
{point: 6, suit: 'hearts'},  {point: 6, suit: 'diamonds'}, {point: 6, suit: 'clubs'}, {point: 6, suit: 'spades'},
{point: 7, suit: 'hearts'},  {point: 7, suit: 'diamonds'}, {point: 7, suit: 'clubs'}, {point: 7, suit: 'spades'},
{point: 8, suit: 'hearts'},  {point: 8, suit: 'diamonds'}, {point: 8, suit: 'clubs'}, {point: 8, suit: 'spades'},
{point: 9, suit: 'hearts'},  {point: 9, suit: 'diamonds'}, {point: 9, suit: 'clubs'}, {point: 9, suit: 'spades'},
{point: 10, suit: 'hearts'},  {point: 10, suit: 'diamonds'}, {point: 10, suit: 'clubs'}, {point: 10, suit: 'spades'},
{point: 11, suit: 'hearts'},  {point: 11, suit: 'diamonds'}, {point: 11, suit: 'clubs'}, {point: 11, suit: 'spades'},
{point: 12, suit: 'hearts'},  {point: 12, suit: 'diamonds'}, {point: 12, suit: 'clubs'}, {point: 12, suit: 'spades'},
{point: 13, suit: 'hearts'},  {point: 13, suit: 'diamonds'}, {point: 13, suit: 'clubs'}, {point: 13, suit: 'spades'}]

document.getElementById("deal-button").addEventListener("click", function (element) {
    //write dealer logic here
    var counter = 0;
    while (counter < 2) {
        var addCard = document.createElement("img");
        var cardSpot = document.getElementById("dealerRow");
        addCard.src = 'JPEG/2C.jpg';
        addCard.width = '150';
        addCard.height = '250';
        //addCard.style.marginLeft ='150';
        cardSpot.appendChild(addCard);
        //pick random card from deck and decrease index by counter
        
        console.log(dealerHand);
        counter = counter + 1;
        
    }

    var counter = 0;
    while (counter < 2) {
        var PaddCard = document.createElement("img");
        var PcardSpot = document.getElementById("playerRow");
        PaddCard.src = 'JPEG/2C.jpg';
        PaddCard.width = '150';
        PaddCard.height = '250';
        //addCard.style.marginLeft ='150';
        PcardSpot.appendChild(PaddCard);
        counter = counter + 1;
    }

}, false);
console.log('test linking');

document.getElementById("hit-button").addEventListener("click", function () {
    //write "hit" logic here
    var HaddCard = document.createElement("img");
    var HcardSpot = document.getElementById("playerRow");
    HaddCard.src = 'JPEG/2C.jpg';
    HaddCard.width = '150';
    HaddCard.height = '250';
    //addCard.style.marginLeft ='150';
    HcardSpot.appendChild(HaddCard);
    console.log('take another card');
    //PcardSpot.appendChild(PaddCard);
});

document.getElementById("stand-button").addEventListener("click", function () {
    //write "Stand" logic here
});

