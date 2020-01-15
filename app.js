const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('<b>Hello Aditya Kumar Prajapa</b>')
})

app.listen(3001, function() {
    console.log('App is listening to port 3001')
})