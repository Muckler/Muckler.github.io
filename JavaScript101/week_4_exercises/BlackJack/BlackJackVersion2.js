var suit = "";
var gameDeck = [];
var playerHand = [];
var dealerHand = [];
var dealerPts = [];
var playerPts = [];
function Card(point, suit) {
    this.point = point;
    this.suit = suit;
}

Card.prototype.getImageUrl = function () {
    //need to convert first letter of suit to caps
    var imgFace = "";
    var imgUrl = "";
    if (this.point > 10 || this.point == 1) {
        switch (this.point) {
            case 1:
            imgFace = 'A';
            break;
            case 11:
            imgFace = 'J';
                break;
            case 12:
            imgFace = 'Q';
                break;
            case 13:
            imgFace = 'K';
                break;
            default: break;
        }//END SWITCH
        imgUrl = 'JPEG/' + imgFace + this.suit.slice(0, 1).toUpperCase() + '.jpg';
    }
    else  {
        var imgUrl = ('JPEG/' + this.point + this.suit.slice(0, 1).toUpperCase() + '.jpg');
    
    }
    return imgUrl;      
}



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
function shuffleDeck (a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
console.log(gameDeck);

function addDealerHand() {
    var addDealCard = document.createElement("img");
        var cardDealSpot = document.getElementById("dealerRow");
        var newDealCard = gameDeck.pop();
        console.log(newDealCard);
        dealerHand.push(newDealCard);
        var insertImg = newDealCard.getImageUrl();
        console.log(insertImg);
        addDealCard.src = insertImg;
        addDealCard.width = '150';
        addDealCard.height = '250';
        //addCard.style.marginLeft ='150';
        cardDealSpot.appendChild(addDealCard);
}
    


//function to calulate total points
function totalPtsPlayer (calcPoints) {
    var thePts = 0;
    calcPoints.forEach(function(element) {
        thePts = thePts + element.point;
    })
    playerPts = thePts

    return thePts;
}
function totalPtsDealer (calcPoints) {
    var thePts = 0;
    calcPoints.forEach(function(element) {
        thePts = thePts + element.point;
    })
    dealerPts = thePts

    return thePts;
}


document.getElementById("deal-button").addEventListener("click", function () {
    //write dealer logic here
    //var counter = 0;
    for (var counter = 1; counter < 3; counter ++) {
        var addCard = document.createElement("img");
        var cardSpot = document.getElementById("dealerRow");
        var newCard = gameDeck.pop();
        console.log(newCard);
        dealerHand.push(newCard);
        var insertImg = newCard.getImageUrl();
        console.log(insertImg);
        addCard.src = insertImg;
        addCard.width = '150';
        addCard.height = '250';
        //addCard.style.marginLeft ='150';
        cardSpot.appendChild(addCard);
        
    }
    for (var counter = 1; counter < 3; counter ++) {
        var PaddCard = document.createElement("img");
        var PcardSpot = document.getElementById("playerRow");
        var PnewCard = gameDeck.pop();
        console.log(PnewCard);
        playerHand.push(PnewCard);
        var PinsertImg = PnewCard.getImageUrl();
        console.log(PinsertImg);
        PaddCard.src = PinsertImg;
        PaddCard.width = '150';
        PaddCard.height = '250';
        //addCard.style.marginLeft ='150';
        PcardSpot.appendChild(PaddCard);
        
    }
}, false);


document.getElementById("hit-button").addEventListener("click", function () {
    //write "hit" logic here
    var HaddCard = document.createElement("img");
    var HcardSpot = document.getElementById("playerRow");
    var HnewCard = gameDeck.pop();
    console.log(HnewCard);
    playerHand.push(HnewCard);
    var HinsertImg = HnewCard.getImageUrl();
    console.log(HinsertImg);
    HaddCard.src = HinsertImg;
    HaddCard.width = '150';
    HaddCard.height = '250';
    //addCard.style.marginLeft ='150';
    HcardSpot.appendChild(HaddCard);
    console.log('take another card');
    //HcardSpot.appendChild(HaddCard);
    //when adding card need to be increasing points
    
    playerPts = totalPtsPlayer(playerHand);
    console.log('before if statement player pts' + playerPts);
    if (playerPts > 21) {
        console.log("player busted");
        console.log(playerPts + "player points if stment");
        var bustedPlayer = document.getElementById("p-bust");
        bustedPlayer.innerHTML = "PLAYER BUSTED!";
    }
}, false);

document.getElementById("stand-button").addEventListener("click", function () {
    //write "Stand" logic here
    totalPtsPlayer(playerHand);
    totalPtsDealer(dealerHand);
    //var playerPts = totalPts(playerHand);
    //var dealerPts = totalPts(dealerHand);
    while (dealerPts < 18) {
        addDealerHand();
        dealerPts = totalPtsDealer(dealerHand);
        
        if (dealerPts > 21) {
            var bustElement = document.getElementById("dealer-bust");
            bustElement.innerHTML = "DEALER BUSTED!";

        
        }
    } 
    var injectDPts = document.getElementById('dealer-points');
    injectDPts.innerHTML = "Dealer Points:  " + dealerPts;
    var injectPPts = document.getElementById('player-points');
    injectPPts.innerHTML = "Player Points:  " + playerPts;
    

    console.log(playerHand);
    console.log(dealerHand);
    console.log(dealerPts);
    console.log(playerPts);
});

