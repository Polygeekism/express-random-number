var express = require('express');

var app = express();

var port = 5000;

app.use(express.static('public'));

app.listen(port, function () {
    console.log('the page is listening');
});
function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}
// create a variable to store a random number

//when the correct address is reached, print out the message and random number
app.get('/random', function(req, res){
    var rando =randomNumber(0,10);
    res.send(rando.toString());
});