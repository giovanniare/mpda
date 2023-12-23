const hbs = require('hbs')

hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear()
})

hbs.registerHelper('personal_data', (data) => {
    return data
})

hbs.registerHelper('language', (data) => {
    return data
})

hbs.registerHelper('es', (value) => {
    return value == "es";
});

hbs.registerHelper('en', (value) => {
    return value == "en";
});
