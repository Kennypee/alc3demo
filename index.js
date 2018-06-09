var express = require('express');
var app = express();

app.get('/cheer.txt', function(req, res){

    res.send('Hello World, you did great');
});

app.get('/jeer.txt', function(req, res){

    res.send('Damn that was awful, ewww...');
});

var server = app.listen(9999, function(){
    console.log('Now listening...')
})