const express = require('express')
const path = require('path')
const exhbs = require('express-handlebars')
const methodOverride = require('method-override')

//Initialization
const app = express()
require('./dbase.js')

//Settings
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', exhbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}))
app.set('view engine','.hbs')

//Midlewares
app.use(express.urlencoded({extended:false}))
app.use(methodOverride('_method'))


//Global Variables

//Routes
app.use(require('./routes/index'))
app.use(require('./routes/gems'))
app.use(require('./routes/users'))

//Static Files

//Server Initialize
app.listen(app.get('port'),()=>{
    console.log("Server on Port", app.get('port'))
})
