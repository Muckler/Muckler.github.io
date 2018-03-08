var dealerHand = [];
var playerHand = [];
//global variable to provide a counter so that card picked and returned is next card in deck
var count = [0]

var deck = [{ point: 1, suit: 'hearts' }, { point: 1, suit: 'diamonds' }, { point: 1, suit: 'clubs' }, { point: 1, suit: 'spades' },
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
{ point: 13, suit: 'hearts' }, { point: 13, suit: 'diamonds' }, { point: 13, suit: 'clubs' }, { point: 13, suit: 'spades' }]

//Randomly picking the card
function pickCard() {
    var randomNumberBetween0and52 = Math.floor(Math.random() * (52));
    var newCard = deck[randomNumberBetween0and52];
    dealerHand.push(newCard);
    console.log('count is ' + count);
    //using count to match up random card picked to card in position of dealer hand
    return dealerHand[count[0]];
}

function dealPlayer() {
    var randomNumberBetween0and52 = Math.floor(Math.random() * (52));
    var newCard = deck[randomNumberBetween0and52];
    playerHand.push(newCard);
    console.log('count is ' + count);
    //using count to match up random card picked to card in position of dealer hand
    return playerHand[count[0]];
}
//Picking the card image from picking the card
function getCardImageUrl(card) {
    if (card.suit === 'hearts') {
        //console.log(card);
        switch (card.point) {
            //why is js saying that the case is undefined?
            case 1:
                var urlStr = 'JPEG/1H.jpg';
                break;
            case 2:
                var urlStr = 'JPEG/2H.jpg';
                break;
            case 3:
                var urlStr = 'JPEG/3H.jpg';
                break;
            case 4:
                var urlStr = 'JPEG/4H.jpg';
                break;
            case 5:
                var urlStr = 'JPEG/5H.jpg';
                break;
            case 6:
                var urlStr = 'JPEG/6H.jpg';
                break;
            case 7:
                var urlStr = 'JPEG/7H.jpg';
                break;
            case 8:
                var urlStr = 'JPEG/8H.jpg';
                break;
            case 9:
                var urlStr = 'JPEG/9H.jpg';
                break;
            case 10:
                var urlStr = 'JPEG/10H.jpg';
                break;
            case 11:
                var urlStr = 'JPEG/11H.jpg';
            case 12:
                var urlStr = 'JPEG/12H.jpg';
                break;
            case 13:
                var urlStr = 'JPEG/13H.jpg';
                break;
            //now need to add a switch for each of ten cards
            //default:
            //console.log('card not found');
        }
    }
    if (card.suit === 'diamonds') {
        switch (card.point) {
            //why is js saying that the case is undefined?
            case 1:
                var urlStr = 'JPEG/1D.jpg';
                break;
            case 2:
                var urlStr = 'JPEG/2D.jpg';
                break;
            case 3:
                var urlStr = 'JPEG/3D.jpg';
                break;
            case 4:
                var urlStr = 'JPEG/4D.jpg';
                break;
            case 5:
                var urlStr = 'JPEG/5D.jpg';
                break;
            case 6:
                var urlStr = 'JPEG/6D.jpg';
                break;
            case 7:
                var urlStr = 'JPEG/7D.jpg';
                break;
            case 8:
                var urlStr = 'JPEG/8D.jpg';
                break;
            case 9:
                var urlStr = 'JPEG/9D.jpg';
                break;
            case 10:
                var urlStr = 'JPEG/10D.jpg';
                break;
            case 11:
                var urlStr = 'JPEG/11D.jpg';
                break;
            case 12:
                var urlStr = 'JPEG/12D.jpg';
                break;
            case 13:
                var urlStr = 'JPEG/13D.jpg';
                break;
            //add cards ace to king
        }
    }
    if (card.suit === 'clubs') {
        //add cards ace to king
        switch (card.point) {
            //why is js saying that the case is undefined?
            case 1:
                var urlStr = 'JPEG/1C.jpg';
                break;
            case 2:
                var urlStr = 'JPEG/2C.jpg';
                break;
            case 3:
                var urlStr = 'JPEG/3C.jpg';
                break;
            case 4:
                var urlStr = 'JPEG/4C.jpg';
                break;
            case 5:
                var urlStr = 'JPEG/5C.jpg';
                break;
            case 6:
                var urlStr = 'JPEG/6C.jpg';
                break;
            case 7:
                var urlStr = 'JPEG/7C.jpg';
                break;
            case 8:
                var urlStr = 'JPEG/8C.jpg';
                break;
            case 9:
                var urlStr = 'JPEG/9C.jpg';
                break;
            case 10:
                var urlStr = 'JPEG/10C.jpg';
                break;
            case 11:
                var urlStr = 'JPEG/11C.jpg';
                break;
            case 12:
                var urlStr = 'JPEG/12C.jpg';
                break;
            case 13:
                var urlStr = 'JPEG/13C.jpg';
                break;
        }
    }
    if (card.suit === 'spades') {
        switch (card.point) {
            //why is js saying that the case is undefined?
            case 1:
                var urlStr = 'JPEG/1S.jpg';
                break;
            case 2:
                var urlStr = 'JPEG/2S.jpg';
                break;
            case 3:
                var urlStr = 'JPEG/3S.jpg';
                break;
            case 4:
                var urlStr = 'JPEG/4S.jpg';
                break;
            case 5:
                var urlStr = 'JPEG/5S.jpg';
                break;
            case 6:
                var urlStr = 'JPEG/6S.jpg';
                break;
            case 7:
                var urlStr = 'JPEG/7S.jpg';
                break;
            case 8:
                var urlStr = 'JPEG/8S.jpg';
                break;
            case 9:
                var urlStr = 'JPEG/9S.jpg';
                break;
            case 10:
                var urlStr = 'JPEG/10S.jpg';
                break;
            case 11:
                var urlStr = 'JPEG/11S.jpg';
                break;
            case 12:
                var urlStr = 'JPEG/12S.jpg';
                break;
            case 13:
                var urlStr = 'JPEG/13S.jpg';
                break;
            //add cards ace to king
        }
    }
    return urlStr;
}

//function to calulate total points
/*function totalPts (ptCard, thePts) {
    console.log(ptCard, thePts);
    var newPts = ptCard.point + thePts;
    console.log(newPts);
    return newPts;
}
var testCard = [{ point: 9, suit: "hearts" }];
var allPts = 0;
console.log(totalPts(testCard, allPts));*/



document.getElementById("deal-button").addEventListener("click", function (element) {
    //write dealer logic here
    //var counter = 0;
    for (var counter = 0; counter < 2; counter ++) {
        var addCard = document.createElement("img");
        var cardSpot = document.getElementById("dealerRow");
        var newCard = pickCard();
        console.log(newCard);
        var insertImg = getCardImageUrl(newCard);
        console.log(insertImg);
        addCard.src = insertImg;
        addCard.width = '150';
        addCard.height = '250';
        //addCard.style.marginLeft ='150';
        cardSpot.appendChild(addCard);
        count[0] = count[0] + 1;
        //pick random card from deck and decrease index by counter
        //counter = counter + 1;

    }

    var counter = 0;
    //need to adjust while loop to add cards to player
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



