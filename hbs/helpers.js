const hbs = require('hbs')

hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear()
})

hbs.registerHelper('personal_data', (data) => {
    return data
})
