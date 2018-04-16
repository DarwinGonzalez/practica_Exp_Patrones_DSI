
import express    from 'express'
import cookie     from 'cookie-parser'
import path       from 'path'
import bodyParser from 'body-parser'
import session    from 'express-session'
import api        from './config/routes'
import mongoose   from 'mongoose'


const app = express()


mongoose.connect('mongodb://localhost/pelicula')

app.set('views', path.join(__dirname, '/app/views'))
app.set('view engine', 'ejs')
app.set('port', (process.env.PORT || 3000))

app.use(cookie())
app.use(session({secret: 'dsi', resave: true, saveUninitialized: true }))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname + "/public")))


app.use('/', api)


app.listen(3000)


module.exports = app