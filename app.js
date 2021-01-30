const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const publicPath = path.resolve('public');

app.use(express.static(publicPath))

app.get ('/', function(req, res) {
    res.sendFile(path.resolve('./views/home.html'));
});

app.get ('/register.html', function(req, res) {
    res.sendFile(path.resolve('./views/register.html'));
});

app.get ('/login.html', function(req, res) {
    res.sendFile(path.resolve('./views/login.html'));
});

app.listen(3000, function(){
    console.log('Servidor Corriendo en el puerto 3000')
});