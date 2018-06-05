
import mongoose from 'mongoose'
const Schema = mongoose.Schema

//----------- Begin Builder Design Pattern ----------- 
const Pelicula = new Schema({
    nombre: 	{ type: String },
    director: 	{ type: String },
    genero: 	{ type: String },
    puntuacion: { type: Number},
    estreno:    { type: String},
    duracion:   {type: Number}

});


module.exports = mongoose.model('Pelicula', Pelicula);

//----------- End Builder Design Pattern ----------- 
/* Separa la construcción de elementos complejos de su representación, aquí declaramos la estructura 
y en otro archivo su representación u operaciones*/
