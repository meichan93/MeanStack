'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express(); //objeto de express

//cargar rutas
var user_routes = require('./routes/user');

app.use(bodyParser.urlencoded({ extended: false })); //es necesario para que bodyparser funcione
app.use(bodyParser.json()); //convierte a datos Json las peticiones que llegan por HTTP

//configurar cabeceras http

//cargar rutas base
app.use('/api', user_routes); //middleware

module.exports = app; //con esto ya se puede utilizar express en otros ficheros que contengan express