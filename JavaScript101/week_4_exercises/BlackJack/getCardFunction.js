
function getCardImageUrl(card) {
    if (card.suit === 'hearts') {
        console.log(card);
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


var testCard = [{ point: 9, suit: "hearts" }];
//console.log(testCard[0]);
console.log(getCardImageUrl(testCard[0]) + ' the url String');
