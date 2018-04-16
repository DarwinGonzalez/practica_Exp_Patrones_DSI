import peliculaController from '../app/controllers/peliculaController'
import express        from 'express'

const api = express.Router()

api.get('/pelicula', peliculaController.main)
api.post('/pelicula', peliculaController.getPelicula)


module.exports = api