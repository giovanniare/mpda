const express = require("express")
const hbs = require('hbs')

const app = express()
const port = process.env.PORT || 4000

require('./hbs/helpers')

app.use(express.static(__dirname + '/public'))
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs')

app.listen(port, () => {
    console.log(`Escuchando en el puerto localhost:${port}`)
})

app.get('/', (req, res) => {
    res.render('home')
})
