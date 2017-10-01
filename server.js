var express = require('express');
var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.listen(process.env.PORT ||3001, function () {
    console.log('Example app listening on port 3001!');
});

app.get('/', function (req, res) {
    res.render('firstpage',{name:'your name'})
});
app.get('/:name?', function (req, res) {
    res.render('firstpage',{name:req.params.name})
});
