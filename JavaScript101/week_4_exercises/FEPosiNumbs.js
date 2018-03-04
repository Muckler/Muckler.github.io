var myNumb = [1, 45, 3, -6, 44, 32, -8, 7, -82]
// does positive numbs with mapping but returns undefined values
var newNum = myNumb.map(function(e) {
    if (e > 0) {
        return e;
    }
})
console.log(newNum);

// now lets do it with the filter instead
var newNumFilt = myNumb.filter(function(e) {
    return e > 0;
})
console.log("using filter: " + newNumFilt)

var evenNum = myNumb.map(function(e) {
    if (e % 2 === 0) {
        return e;
    }
})
console.log(evenNum);

var squareNum = myNumb.map(function(e) {
    return e ** 2;
})
console.log("Numbers squared with map:  " + squareNum);

var cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 }
  ];

function printName(theCities) {
    var coolCities = theCities.filter(function(element) {
        return element.temperature < 70;
    })
    console.log(coolCities);
    //could also do this with map function 
    //var nameCool = coolCities.map(function(element) {
    coolCities.forEach(function(element) {
        console.log("Cities with temp < 70:  " + element.name);
    });
    
    
    //console.log(nameCool);

    //return nameCool;
}

//console.log("Cool cities: " + printName(cities));
printName(cities);
function cityNames(getNames) {
    getNames.forEach(function(element) {
        console.log("City Name: " + element.name)
    })
}
cityNames(cities);