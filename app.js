const express = require("express")
const hbs = require('hbs')
const cookieParser = require('cookie-parser');
const i18n = require('i18n');
const path = require('path')
const fs = require('fs')

const app = express()
const port = process.env.PORT || 4000

require('./hbs/helpers')

app.use(express.static(__dirname + '/public'))
hbs.registerPartials(__dirname + '/views/partials')
hbs.registerPartials(__dirname + '/views/personal')
app.set('view engine', 'hbs')

// Configuración de i18n
i18n.configure({
    locales: ['en', 'es'],
    directory: __dirname + '/languages',
    defaultLocale: 'en',
    cookie: 'lang'
});

// Middleware de traducción
app.use(i18n.init);

// Middleware para manejar cookies
app.use(cookieParser());

// Middleware para cambiar el idioma
app.use((req, res, next) => {
    var lang = req.query.lang || req.cookies.lang || 'en';
    res.setLocale(lang);
    res.locals.lang = lang;
    next();
});

// Inicia el servidor
app.listen(port, () => {
    console.log(`Escuchando en el puerto localhost:${port}`)
})

// Rutas
app.get('/', (req, res) => {
    var language = req.query.lang || req.cookies.lang || 'en';
    var file_path = path.join(__dirname, `/languages/${language}.json`)

    try {
        var data = fs.readFileSync(file_path, 'utf8');
        var info = JSON.parse(data)
    } catch (error) {
        console.error('Error reading JSON file:', error.message);
        var en_path = path.join(__dirname, '/languages/en.json')
        var data = fs.readFileSync(en_path, 'utf8');
        var info = JSON.parse(data)
    }

    res.render('home', info.menu)
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
