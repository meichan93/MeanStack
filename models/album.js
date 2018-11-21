'use strict'

var mongoose = require('mongoose'); //mongoose permite definir esquemas
var Schema = mongoose.Schema; //permite crear un objeto de tipo esquema

var AlbumSchema = Schema({
    title: String,
    description: String,
    year: Number,
    image: String,
    artist: { type: Schema.ObjectId, ref: "Artist" } //Propiedad artist va a guardar un id del documento de artistas e internamente mongo va a reconocer que ese id está en la coleccion de objetos Artist
}); //colección de datos, sin ids porque mongodb los crea automático

module.exports = mongoose.model("Album", AlbumSchema); // modelo creado para poder usar el objeto anterior fuera de este fichero