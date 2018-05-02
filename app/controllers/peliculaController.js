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
    let result = await Pelicula.findOne({'nombre': req.body.nombre})
    if (result) throw new Error('Pelicula ya existe')
    pelicula.save()

    res.redirect('/pelicula')
}

module.exports = { main, getPelicula }