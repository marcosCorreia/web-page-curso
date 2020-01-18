const app = require('express')()
const consign = require('consign')
const db = require('./config/db')
const mongoose = require('mongoose')

require('./config/mongodb')

app.db = db
app.mongoose = mongoose

const firebaseConfig = {
    apiKey: "AIzaSyDRAReUC16wc-yIWPXJePxn7EGS4gdRNMw",
    authDomain: "conhecimento-a203b.firebaseapp.com",
    databaseURL: "https://conhecimento-a203b.firebaseio.com",
    projectId: "conhecimento-a203b",
    storageBucket: "conhecimento-a203b.appspot.com",
    messagingSenderId: "993003942285",
    appId: "1:993003942285:web:3efc40cb4c5ee5a01c0dc4",
    measurementId: "G-FFQ8EXC4PM"
  };

consign()
    .include('./config/passport.js')
    .then('./config/middlewares.js')
    .then('./api/validation.js')
    .then('./api')
    .then('./schedule')
    .then('./config/routes.js')
    .into(app)

app.listen(3000, () => {
    console.log('Backend Executando...')
})