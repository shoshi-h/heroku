var express = require('express');
var app = express();

app.listen(3001, function () {
    console.log('Example app listening on port 3001!');
});

app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.get('/:name?', function (req, res) {
    res.send('Hello '+req.params.name+'!');
});
