'use strict'

var mongoose = require('mongoose'); //mongoose permite definir esquemas
var Schema = mongoose.Schema; //permite crear un objeto de tipo esquema

var SongSchema = Schema({
    number: String,
    name: String,
    duration: String,
    file: String,
    album: { type: Schema.ObjectId, ref: "Album" } // no solo se tiene el id del objeto, sino también se puede acceder a toda la información del objeto en sí :) increíble eh?
}); //colección de datos, sin ids porque mongodb los crea automático

module.exports = mongoose.model("Song", SongSchema); // modelo creado para poder usar el objeto anterior fuera de este fichero, o para poder crear instacias del mismo (usarlo en otros lados)