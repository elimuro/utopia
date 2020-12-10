var PORT = process.env.PORT || 3000;
var express = require('express');

var app = express(); 
var server = app.listen(PORT); 

app.use(express.static('public')); 
console.log('server is running');