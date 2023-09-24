const express = require('express');
const app = express();

// static assets
app.use(express.static('./public'))
// parser
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());

// pug engine
app.set('view engine', 'pug');

// home
app.get('/', (req, res) => {
    const name = req.cookies.username;
    res.render('index', {name:name});
})

// data
app.get('/data', (req, res) => {
    const {number} = req.query;
    if (number === undefined) {
        res.status(400).send('Lack of Parameter');
    } else if (isNaN(number) || number < 0) {
        res.status(400).send('Wrong Parameter');
    } else {
        // count total in O(1)
        const num = Number(number)
        let total = num * (num + 1) / 2;
        res.status(200).send(`${total}`);
    }
})

// myName
app.get('/myName', (req, res) => {
    const name = req.cookies.username;
    res.status(200).render('myName', {name});    
})

app.post('/myName', (req, res) => {
    res.clearCookie('username');
    res.status(200).render('myName')
})

// trackName
app.get('/trackName', (req, res) => {
    res.cookie('username', req.query.username)
    res.redirect('myName')
})

app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});