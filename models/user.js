'use strict'

var mongoose = require('mongoose'); //mongoose permite definir esquemas
var Schema = mongoose.Schema; //permite crear un objeto de tipo esquema

var UserSchema = Schema({
    name: String,
    surname: String,
    email: String,
    password: String,
    role: String,
    image: String
}); //colección de datos, sin ids porque mongodb los crea automático

module.exports = mongoose.model("User", UserSchema); // modelo creado para poder usar el objeto anterior fuera de este fichero