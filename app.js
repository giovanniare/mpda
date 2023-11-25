const express = require("express")
const hbs = require('hbs')

const app = express()
const port = process.env.PORT || 4000

require('./hbs/helpers')

app.use(express.static(__dirname + '/public'))
hbs.registerPartials(__dirname + '/views/partials')
hbs.registerPartials(__dirname + '/views/personal')
app.set('view engine', 'hbs')

app.listen(port, () => {
    console.log(`Escuchando en el puerto localhost:${port}`)
})

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/jose_vega', (req, res) => {
    res.render('personal_web')
})
