var express = require('express');
var app = express();

app.use(express.static(__dirname + '/../'));


app.listen(8000, function () {
    console.log('Dope producing on port 8000 yo');
});