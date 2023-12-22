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
    res.render('personal_web', {
        name: "Jose Vega",
        position: "Co-Founder",
        cel_link: "523318039863",
        cel_text: "331-803-9863",
        img_banner: "jose_vega_transparent.png",
        img_contact: "jose_vega_white.png",
        dynamic_words: "Parthner&&Distributor&&Businessman",
        name_link: "jose_vega",
        email: "jose.v@mpda.com.mx",
        personal_words: "Some words from Dani's hearth.",
        global_words: "Here will be some text saying something interesting about me and my roll at company."
    })
})
