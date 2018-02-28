var theService = {firstVisit:'good',
                secondVisit: 'fair',
                thirdVisit: 'bad'};
var billAmount = 20.06;

function calculateBill (amount, service) {
    if (service == 'good') { 
        var tip = amount * .20;
        var totalBill = tip + amount;
        console.log(totalBill);
        return totalBill;
    }
    else if (service =='fair') {
        var tip = amount * .15;
        var totalBill = tip + amount;
        console.log(totalBill);
        return totalBill;
    }
    else if (service == 'bad') { 
        var tip = amount * .10;
        var totalBill = tip + amount;
        console.log(totalBill);
        return totalBill;
    }
}
var payThis = calculateBill(billAmount, theService['thirdVisit'], );
console.log(payThis);