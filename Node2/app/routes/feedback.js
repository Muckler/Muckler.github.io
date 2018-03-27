var express = require('express');
var router = express.Router();
console.log("feedback display");
router.get('/feedback', function(req, res){
    res.render('feedback', {
        pageTitle: 'Feedback',
        pageID: 'Home'
    });
});

module.exports = router