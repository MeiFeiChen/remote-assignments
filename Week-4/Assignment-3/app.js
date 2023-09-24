import express from 'express'
import bodyParser from 'body-parser'
import flash from 'connect-flash'
import session from 'express-session'
import {authRouter} from './routes/auth.js'

const app = express()

// view engine setup
app.set('view engine', 'pug')

// static assets
app.use(express.static('./public'))

// middleware
// parses urlencoded bodies
app.use(bodyParser.urlencoded({extended: false}))
// settings object for the session ID cookie
app.use(session({
    secret:'keyboard cat',
    saveUninitialized: false,
    resave: true
}));

app.use(flash());


app.use('/', authRouter)


// member
app.get('/member', (req, res) => {
    res.render('member', {user: req.session.user})
})

// logout
app.get('/logout', (req, res) => {
    req.session.destroy(() => {
      console.log('session destroyed')
    })
    res.redirect('/')
  })


app.listen(3000, () => {
    console.log('Server is listening on port 3000....')
  })