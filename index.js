'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3977;

mongoose.connect('mongodb://localhost:27017/curso_mean', (err, res) => {

    if (err) {
        throw err;
    } else {
        console.log("La base de datos está funcionando correctamente.");
        app.listen(port, function() {
            console.log("Servidor del API Rest de música escuchando en http://localhost:" + port);
        });
    }

});