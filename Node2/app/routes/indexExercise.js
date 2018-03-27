var express = require('express');
var app = express();
var router = express.Router();
var pagePhotos =[];
var dogPhotos = [];
var catPhotos =[];
var cdPhotos = [];
var dataFile = require('../data/data2.json');
console.log(dataFile);
app.set('appData', dataFile);
router.get('/', function(req, res){
    var data = dataFile;
    console.log(data);
    for (var i = 0; i < 3; i++) {
        pagePhotos = pagePhotos.concat(data.pets[i].picture[0]);
    }
    console.log("--------------");
    res.render('indexExercise', {
        imgTitle: 'Here are some pets',
        pageID: 'Check it out',
        imgPage: pagePhotos
    });
    
});
router.get('/dogs', function(req, res){
    
    var data = dataFile;
    console.log(data);
    for (var i = 0; i < 5; i++) {
        dogPhotos = dogPhotos.concat(data.pets[0].picture[i]);
    }
    /*data.pets.forEach(function(item){
        pagePhotos= pagePhotos.concat(item.picture);
    })*/
    res.render('dogs', {
        imgTitle: 'Here are some dogs',
        pageID: 'Check it out',
        imgDog: dogPhotos
    });
});
router.get('/cats', function(req, res) {
    for (var i = 0; i < 5; i++) {
        catPhotos = catPhotos.concat(dataFile.pets[1].picture[i]);
        console.log(catPhotos);
    }
    res.render('cats', {
        catTitle: 'Here are some cats',
        catID: 'Check it out',
        imgCat: catPhotos
    });;
});

router.get('/cats&dogs', function(req, res) {
    for (var i = 0; i < 5; i++) {
        cdPhotos = cdPhotos.concat(dataFile.pets[2].picture[i]);
    }
    res.render('cats&dogs', {
        cdTitle: 'Here are some cats and dogs',
        cdID: 'Check it out',
        imgCD: cdPhotos
    });;
});

module.exports = router;