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
var rando =randomNumber(0,10);
app.get('/random', function(req, res){
    res.send('Your random number is ' + rando);
});