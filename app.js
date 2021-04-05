const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const session = require('express-session')
const passport = require('passport')
const routes = require('./routes')
const app = express()
const PORT = 3000
const usePassport = require('./config/passport')
usePassport(app)

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(session({
  secret: 'ThisIsMySecret',
  resave: false,
  saveUninitialized: true
}))
app.use(routes)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))



app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})