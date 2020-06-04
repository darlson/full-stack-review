require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const app = express()
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

// controllers
const auth = require('./controllers/authCtrl')

// top-level middleware
app.use(express.json())
app.use(
    session({
        resave: false,
        saveUninitialized: true,
        cookie: {maxAge: 1000 * 60 * 60 * 24 * 14},
        secret: SESSION_SECRET
    })
)

// endpoints
// auth endpoints
app.post('/auth/login', auth.login)
app.post('/auth/register', auth.register)
app.delete('/auth/logout', auth.logout)


// database connection
massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then( db => {
    app.set('db', db)
    console.log('Connected to db, ya filthy animal');
    app.listen( SERVER_PORT, () => console.log(`Connected to port ${SERVER_PORT}💃`))
}).catch ( err => console.log(err))