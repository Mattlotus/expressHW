const express = require('express')
const app = express()

const PORT = 7000
app.set("view engine", "jsx")
app.engine("jsx",require("express-react-views").createEngine())

// ..................................ROUTES

const responses = require('./models/responses');

app.get(`/greeting/:name`, ( req, res ) => {
    res.send(`<h1> Hi  ${req.params.name}! Nice to meet you </h1>`)
})

app.get('/tip/:total/:tipPercentage', (req, res) =>{
    let tip = req.params.total * (req.params.tipPercentage / 100)
    res.send (`<h1>Your expected tip is ${tip}</h1>`)
})

app.get('/magic/:question', (req, res) =>{
    let randomResponse = responses[Math.floor(Math.random() * responses.length)]
    res.send(`${req.params.question}<h1>${randomResponse}</h1>`)
})



















app.listen( PORT, ( req, res ) => {
    console.log( `Server is running on port ${PORT}`  )
} )