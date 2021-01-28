const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve('public');

app.use(express.static(publicPath))

app.get ('/', function(req, res) {
    res.sendFile(path.resolve('./views/home.html'));
});

app.listen(3000, function(){
    console.log('Servidor Corriendo en el puerto 3000')
});