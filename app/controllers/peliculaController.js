import Pelicula        from '../models/pelicula.js'


async function main(req, res) {
    let peliculas = await Pelicula.find({})
    res.render('pelicula', { peliculas: peliculas })
}

//----------- Begin Patrón Factory ------------------
function crearPelicula(req,res){
    return new Pelicula({ 'nombre': req.body.nombre, 'director': req.body.director, 'genero': req.body.genero, 'puntuacion':req.body.puntuacion, 'estreno': req.body.estreno, 'duracion': req.body.duracion });
}
//----------- End Patrón Factory ------------------

async function getPelicula(req, res) {
    const pelicula = crearPelicula(req,res); 
    // ------------------ Begin Patrón Iterator --------------------
    let result = await Pelicula.findOne({'nombre': req.body.nombre})
    if (result) throw new Error('Pelicula ya existe')
    pelicula.save()
    // ------------------ End Patrón Iterator --------------------
    /* FINDONE : Proporcione una forma de acceder a los elementos de un objeto agregado 
    secuencialmente sin exponer su representación subyacente. */
    res.redirect('/pelicula')
}

module.exports = { main, getPelicula }