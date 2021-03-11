const express = require('express')
const products = require('./data/products')

const app = express()

//this is a get http request, if i go to localhost:5000 it will run the text
app.get("/", (req, res) => {
    res.send("API is running...")
})

//this route will give you a json array of all products showing on localhost:5000
app.get("/api/products", (req, res) => {
    res.json(products)
})

// this route will get each individual product
app.get("/api/products/:id", (req, res) => {
    const product = products.find(p => p._id === req.params.id)
    res.json(product)
})


app.listen(5000, console.log('Server running on port 5000'))